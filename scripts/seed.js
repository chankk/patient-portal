const { db } = require("@vercel/postgres");
const { doctors, locations, location_types, specializations } = require("../src/app/lib/data/seed_data.js");

async function seedLocationType(client) {
	try {
		// create location_type table
		const createTable = await client.sql`
			CREATE TABLE IF NOT EXISTS location_type (
				id SERIAL NOT NULL UNIQUE PRIMARY KEY,
				name VARCHAR(50) NOT NULL UNIQUE 
			);
		`;
		console.log("Created location_type table");

		// populate table
		const populated = await Promise.all(
			location_types.map(
				(locationType) => client.sql`
					INSERT INTO location_type (name) 
					VALUES (${locationType})
					ON CONFLICT DO NOTHING;
				`
			)
		);
		console.log(`Seeded ${populated.length} location types`);
		return { createTable, location_type: populated };
	} catch (error) {
		console.error("Error seeding location_types table");
		throw error;
	}
}

async function seedLocation(client) {
	try {
		// create location table
		const createTable = await client.sql`
			CREATE TABLE IF NOT EXISTS location (
				id serial NOT NULL UNIQUE PRIMARY KEY,
				type_id integer NOT NULL,
				name varchar(64) NOT NULL,
				address varchar(64) NOT NULL,
				locality varchar(64) NOT NULL,
				postal_code char(6) NOT NULL,
				phone_number char(10) NOT NULL,
				fax_number char(10),
				CONSTRAINT fk__location__location_type
					FOREIGN KEY (type_id) 
					REFERENCES location_type(id)
					ON DELETE SET NULL
			);
		`;
		console.log("Created location table");

		// Populate table
		const populated = await Promise.all(
			locations.map(
				(location) => client.sql`
					INSERT INTO location (type_id, name, address, locality, postal_code, phone_number, fax_number)
					VALUES (${location.type_id}, ${location.name}, ${location.address}, ${location.locality}, ${location.postal_code}, ${location.phone_number}, ${location.fax_number})
					ON CONFLICT DO NOTHING;
				`
			)
		);
		console.log(`Seeded ${populated.length} locations`);
		return { createTable, locations: populated };
	} catch (error) {
		console.error("Error seeding location table");
		throw error;
	}
}

async function seedDoctorSpecialty(client) {
	try {
		// Create doctor_specialty table
		const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS doctor_specialty (
                id SERIAL PRIMARY KEY NOT NULL UNIQUE,
                name VARCHAR(50) NOT NULL UNIQUE
            );
        `;
		console.log("Created doctor_specialty table");

		// Populate table
		const populated = await Promise.all(
			specializations.map(
				(specialty) => client.sql`
                INSERT INTO doctor_specialty (name)
                VALUES (${specialty})
                ON CONFLICT DO NOTHING;
                `
			)
		);
		console.log(`Seeded ${populated.length} doctor specializations`);
		return { createTable, doctor_specialty: populated };
	} catch (error) {
		console.error("Error seeding doctor_specialty");
		throw error;
	}
}

async function seedDoctor(client) {
	try {
		// create doctor table
		const createTable = await client.sql`
			CREATE TABLE IF NOT EXISTS doctor (
				id char(9) PRIMARY KEY NOT NULL UNIQUE,
				first_name varchar(32) NOT NULL,
				last_name varchar(32) NOT NULL,
				gender varchar(32),
				specialization_id integer,
				location_id integer,
				CONSTRAINT fk__doctor__doctor_specialty
					FOREIGN KEY (specialization_id)
					REFERENCES doctor_specialty(id)
					ON DELETE SET NULL,
				CONSTRAINT fk__doctor__location
					FOREIGN KEY (location_id)
					REFERENCES location(id)
					ON DELETE SET NULL
			);
		`;
		console.log("created doctor table");

		// populate doctor table
		const populated = await Promise.all(
			doctors.map(
				(doctor) => client.sql`
				INSERT INTO doctor (id, first_name, last_name, gender, specialization_id, location_id)
				VALUES (${doctor.id}, ${doctor.first_name}, ${doctor.last_name}, ${doctor.gender}, ${doctor.specialization_id}, ${doctor.location_id})
				ON CONFLICT DO NOTHING;
				`
			)
		);
		console.log(`Seeded ${populated.length} doctors`);
		return { createTable, doctors: populated };
	} catch (error) {
		console.error("Error seeding doctor table");
		throw error;
	}
}

async function main() {
	console.log("call functions in /scripts/seed to seed data");
	// const client = await db.connect();
	// seed data here
	// await client.end();
}

main().catch((err) => {
	console.error("An error occurred while attempting to seed the database:", err);
});

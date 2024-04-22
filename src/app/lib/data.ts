import {sql} from '@vercel/postgres';
import {Doctor} from '@/app/lib/definitions';

export async function fetchDoctors(){
    try{
        const data = await sql<Doctor>
        `SELECT doctor.id, doctor.first_name, doctor.last_name, doctor_specialty.name AS specialty
        FROM doctor
        JOIN doctor_specialty
        ON doctor.specialization_id = doctor_specialty.id;`;
        return data.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch doctors");
    }
}
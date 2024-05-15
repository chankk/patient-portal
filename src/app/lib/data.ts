import prisma from "@/app/lib/db";

export async function fetchDoctors(){
    try {
        const doctors = await prisma.doctor.findMany({
            include: {
                doctor_specialty: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return doctors;
    } catch (error) {
        throw new Error("Database Error: Failed to fetch doctors");
    }
}

export async function fetchDoctor(doctorID: string){
    try {
        const doctor = await prisma.doctor.findFirstOrThrow({
            include:{
                doctor_specialty:  {
                    select: {name: true}
                },
                location: {
                    select: {name:true, address:true, locality: true, postal_code: true, phone_number: true, fax_number: true}
                }
            },
            where: {id: doctorID}
        });
        return doctor;
    } catch (error) {
        throw new Error(`Database error: Failed to fetch doctor with ID: ${doctorID}`);
    }
}

export async function fetchLocations(){
    try {
        const locations = await prisma.location.findMany(); // change to findMany
        return JSON.stringify(locations);
    }
    catch (error){
        throw new Error(`Database error: Failed to fetch locations`);
    }
}
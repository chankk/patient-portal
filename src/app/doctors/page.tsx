import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@/app/components/card";
import { fetchDoctors } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page() {
	const doctors = await fetchDoctors().catch((error) => notFound());
	return (
		<Box component="main">
			<Typography variant="h4">Doctor Directory</Typography>
			<Grid container my={1} spacing={3}>
				{doctors.map((doctor) => (
					<Grid item key={doctor.id} xs={3}>
						<Card
							heading={`${doctor.first_name} ${doctor.last_name}`}
							content={doctor.doctor_specialty?.name ?? ""}
							href={`/doctors/${doctor.id}`}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

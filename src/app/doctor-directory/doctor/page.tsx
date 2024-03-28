import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DoctorProps } from "@/app/types";

const cols: GridColDef<DoctorProps>[] = [
	{
		field: "date",
		headerName: "Date",
		type: "date",
		width: 150,
		editable: false,
	},
	{
		field: "purpose",
		headerName: "Purpose",
		width: 200,
		editable: false,
	},
	{
		field: "details",
		headerName: "Details",
		type: "string",
		width: 500,
	},
];
const rows: DoctorProps[] = [
	{ id: 1, date: new Date("2023-11-25"), purpose: "Routine checkup", details: "" },
	{ id: 2, date: new Date("2023-10-25"), purpose: "Medication check-in", details: "" },
];

export default function Doctor() {
	return (
		<Box>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start">
				<Grid
					item
					xs={12}
					md={8}>
					<Typography variant="h4">Tara Williams, MD</Typography>
					<Typography
						variant="h5"
						gutterBottom>
						General Practitioner
					</Typography>
					<Typography
						variant="body1"
						component="address"
						gutterBottom>
						<b>Address: </b> 4116 Clove Crossing T5K 1Y3 Edmonton AB <br />
						<b>Phone: </b> 250-206-8989 <br />
						<b>Hours: </b> 9:00am to 5:00pm Monday to Friday
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}>
					<Stack
						direction="column"
						spacing={1}>
						<Button variant="contained">Book Appointment</Button>
						<Button variant="contained">Contact Team</Button>
						<Button variant="text">View Prescriptions</Button>
					</Stack>
				</Grid>
			</Grid>
			<Box>
				<Typography variant="h6">Past Appointments</Typography>
				<Box sx={{ height: 250, width: "100%" }}>
					<DataGrid
						rows={rows}
						columns={cols}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 5,
								},
							},
						}}
						pageSizeOptions={[5]}
						disableRowSelectionOnClick
					/>
				</Box>
			</Box>
		</Box>
	);
}

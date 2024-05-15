import Box from "@mui/material/Box";
import { AppointmentProps } from "@/app/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid/";
import Typography from "@mui/material/Typography";

const columns: GridColDef<AppointmentProps>[] = [
	{
		field: "date",
		headerName: "Date",
		type: "date",
		width: 150,
		editable: false,
	},
	{
		field: "doctor",
		headerName: "Doctor",
		width: 150,
		editable: false,
	},
	{
		field: "type",
		headerName: "Specialization",
		width: 110,
		editable: false,
	},
	{
		field: "purpose",
		headerName: "Purpose",
		width: 110,
		editable: false,
	},
	{
		field: "location",
		headerName: "Location",
		width: 160,
	},
	{
		field: "details",
		headerName: "Details",
		type: "string",
		width: 160,
	},
];

const rows: AppointmentProps[] = [
	{ id: 2, date: new Date("2023-12-12"), doctor: "Abigail Hill", type: "Psychology", purpose: "Counseling", location: "Trinity Health", details: "" },
	{ id: 1, date: new Date("2023-11-25"), doctor: "Abraham Jones", type: "Psychiatry", purpose: "Assessment", location: "Trinity Health", details: "" },
];

export default function Page() {
	return (
		<Box>
			<Typography variant="h4">Past Appointments</Typography>
			<Box sx={{ height: 400, width: "100%" }}>
				<Box sx={{ height: 400, width: "100%" }}>
					<DataGrid
						rows={rows}
						columns={columns}
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

import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { HospitalizationProps } from "@/app/types";
import Typography from "@mui/material/Typography";

const columns: GridColDef<HospitalizationProps>[] = [
	{
		field: "date",
		headerName: "Date",
		type: "date",
		width: 150,
		editable: false,
	},
	{
		field: "diagnosis",
		headerName: "Diagnosis",
		width: 150,
		editable: false,
	},
	{
		field: "treatment",
		headerName: "Treatment",
		width: 110,
		editable: false,
	},
	{
		field: "doctor",
		headerName: "Doctor",
		width: 110,
		editable: false,
	},
	{
		field: "hospital",
		headerName: "Hospital",
		width: 160,
	},
	{
		field: "details",
		headerName: "Details",
		type: "string",
		width: 160,
	},
];

const rows: HospitalizationProps[] = [
	{ id: 1, date: new Date("2023-11-25"), diagnosis: "broken leg", treatment: "surgery", doctor: "Phineas Lee", hospital: "Goodwin Health", details: "" },
];

export default function Hospitalization() {
	return (
		<Box>
			<Typography variant="h4">Hospitalizations</Typography>
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
	);
}

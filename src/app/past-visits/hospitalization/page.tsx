import Box from "@mui/material/Box";
import DataTable from "@/app/components/data-table";
import { GridColDef } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

const columns: GridColDef<(typeof rows)[number]>[] = [
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

const rows = [
	{ id: 1, date: new Date("2023-11-25"), diagnosis: "broken leg", treatment: "surgery", doctor: "Phineas Lee", hospital: "Goodwin Health", details: "" },
];

export default function Hospitalization() {
	return (
		<Box>
			<Typography variant="h4">Hospitalizations</Typography>
			<DataTable
				rows={rows}
				columns={columns}
			/>
		</Box>
	);
}

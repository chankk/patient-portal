import Box from "@mui/material/Box";
import DataTable from "@/app/components/data-table";
import { GridColDef } from "@mui/x-data-grid/";
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
		field: "vaccine",
		headerName: "Vaccine",
		width: 150,
		editable: false,
	},
	{
		field: "disease",
		headerName: "Protects Against",
		width: 150,
		editable: false,
	},
	{
		field: "details",
		headerName: "Details",
		width: 110,
		editable: false,
	},
];

const rows = [
	{ id: 1, date: new Date("2023-12-25"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 2, date: new Date("2022-09-25"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 3, date: new Date("2021-10-12"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 4, date: new Date("2020-09-24"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 5, date: new Date("2020-06-24"), vaccine: "Moderna", disease: "Covid-19", details: "" },
	{ id: 6, date: new Date("2019-11-08"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 7, date: new Date("2018-10-12"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 8, date: new Date("2008-10-12"), vaccine: "Influencza", disease: "Common Flu", details: "" },
	{ id: 9, date: new Date("2009-10-12"), vaccine: "Influencza", disease: "Common Flu", details: "" },
];

export default function Immunization() {
	return (
		<Box>
			<Typography variant="h4">Immunization</Typography>
			<Box sx={{ height: 400, width: "100%" }}>
				<DataTable
					rows={rows}
					columns={columns}
				/>
			</Box>
		</Box>
	);
}

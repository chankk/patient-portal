import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid/";
import { TestResultProps } from "@/app/types";
import Typography from "@mui/material/Typography";

const columns: GridColDef<TestResultProps>[] = [
	{
		field: "date",
		headerName: "Date",
		type: "date",
		width: 150,
		editable: false,
	},
	{
		field: "category",
		headerName: "Category",
		width: 150,
		editable: false,
	},
	{
		field: "test",
		headerName: "Test",
		width: 110,
		editable: false,
	},
	{
		field: "result",
		headerName: "Result",
		width: 110,
		editable: false,
	},
	{
		field: "doctor",
		headerName: "Ordered By",
		width: 160,
	},
	{
		field: "details",
		headerName: "Details",
		type: "string",
		width: 160,
	},
];

const rows: TestResultProps[] = [
	{ id: 1, date: new Date("2023-11-25"), category: "blood", test: "CBC", result: "Normal", doctor: "Salem Miles", details: "" },
	{ id: 2, date: new Date("2023-11-25"), category: "imaging", test: "ultrasound", result: "Normal", doctor: "Salem Miles", details: "" },
	{ id: 2, date: new Date("2023-11-25"), category: "blood", test: "BMP", result: "Normal", doctor: "Salem Miles", details: "" },
	{ id: 3, date: new Date("2022-11-25"), category: "blood", test: "CBC", result: "Normal", doctor: "Salem Miles", details: "" },
	{ id: 4, date: new Date("2022-11-25"), category: "blood", test: "BMP", result: "Normal", doctor: "Salem Miles", details: "" },
];

export default function TestResults() {
	return (
		<Box>
			<Typography variant="h4">Test Results</Typography>
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

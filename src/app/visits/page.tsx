import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from "@/app/components/card";
const cardData = [
	{
		heading: "Past Appointments",
		content: "View details of your past medical appointments.",
		href: "/visits/appointments",
	},
	{
		heading: "Past Hospitalizations",
		content: "View details of your past hospital stays.",
		href: "/visits/hospitalizations",
	},
];

const cards = cardData.map((card) => {
	return (
		<Grid item key={card.heading} lg={3}>
			<Card heading={card.heading} content={card.content} href={card.href}></Card>
		</Grid>
	);
});

export default function Page() {
	return (
		<Box component="main">
			<Typography variant="h4">Past Visits</Typography>
			<Grid container my={1} spacing={3}>
				{cards}
			</Grid>
		</Box>
	);
}

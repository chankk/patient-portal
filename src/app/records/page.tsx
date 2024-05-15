import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from "@/app/components/card";

const cardData = [
	{
		heading: "Test Results",
		content: "Review your test results, such as lab work and diagnostic imaging.",
		href: "/records/tests",
	},
	{
		heading: "Immunizations",
		content: "Summary of your immunization history.",
		href: "/records/immunizations",
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
			<Typography variant="h4">Health Records</Typography>
			<Grid container my={1} spacing={3}>
				{cards}
			</Grid>
		</Box>
	);
}

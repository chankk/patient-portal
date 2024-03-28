import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from "@/app/components/card";

const cardData = [
	{
		heading: "Appointments",
		content: "Phasellus vitae augue tempor, ultrices mi condimentum, sagittis lacus.",
		href: "/past-visits/appointment",
	},
	{
		heading: "Hospitalizations",
		content: "Phasellus vitae augue tempor, ultrices mi condimentum, sagittis lacus.",
		href: "/past-visits/hospitalization",
	},
];

const cards = cardData.map((card) => {
	return (
		<Grid
			item
			key={card.heading}
			lg={3}>
			<Card
				heading={card.heading}
				content={card.content}
				href={card.href}></Card>
		</Grid>
	);
});

export default function PastVisits() {
	return (
		<Box component="main">
			<Typography variant="h4">Past Visits</Typography>
			<Grid
				container
				my={1}
				spacing={3}>
				{cards}
			</Grid>
		</Box>
	);
}

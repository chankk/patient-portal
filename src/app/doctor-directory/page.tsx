import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from "@/app/components/card";

const cardData = [
	{
		heading: "Tara Williams",
		content: "Phasellus vitae augue tempor, ultrices mi condimentum, sagittis lacus.",
		href: "",
	},
	{
		heading: "Abraham Jones",
		content: "Phasellus vitae augue tempor, ultrices mi condimentum, sagittis lacus.",
		href: "",
	},
];

const cards = cardData.map((card) => {
	return (
		<Grid
			item
			key={card.heading}
			xs={3}>
			<Card
				heading={card.heading}
				content={card.content}
				href={card.href}></Card>
		</Grid>
	);
});

export default function DoctorDirectory() {
	return (
		<Box component="main">
			<Typography variant="h4">Doctor Directory</Typography>
			<Grid
				container
				my={1}
				spacing={3}>
				{cards}
			</Grid>
		</Box>
	);
}

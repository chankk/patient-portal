import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import TextCard from "./basic-card";

const cardData = [
	{
		heading: "Health Records",
		content: "Access your test results, immunization record and other medical information.",
	},
	{
		heading: "Past Visits",
		content: "Review past medical visits, such as hospitlizations and specialist appointments.",
	},
	{
		heading: "Doctor Directory",
		content: "Connect with your healthcare providers, find contact information and schedule appointments.",
	},
];

const cards = cardData.map((card) => {
	return (
		<Grid
			item
			key={card.heading}
			lg={3}>
			<TextCard
				heading={card.heading}
				content={card.content}></TextCard>
		</Grid>
	);
});

const name = "Rosalie";
const greeting = "It's great to have you here.";

export default function Home() {
	return (
		<Box
			component="main"
			sx={{ flexGrow: 1, p: 3 }}>
			<Toolbar />
			<Typography variant="h4">Hello, {name}!</Typography>
			<Typography
				variant="h5"
				gutterBottom>
				{greeting}
			</Typography>
			<Grid
				container
				my={1}
				spacing={3}>
				{cards}
			</Grid>
		</Box>
	);
}

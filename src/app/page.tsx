import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from "@/app/basic-card";

const cardData = [
	{
		heading: "Health Records",
		content: "Access your test results, immunization record and other medical information.",
		href: "/health-records",
	},
	{
		heading: "Past Visits",
		content: "Review past medical visits, such as hospitlizations and specialist appointments.",
		href: "/past-visits",
	},
	{
		heading: "Doctor Directory",
		content: "Connect with your healthcare providers, find contact information and schedule appointments.",
		href: "/doctor-directory",
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

const name = "Rosalie";
const greeting = "It's great to have you here.";

export default function Home() {
	return (
		<Box component="main">
			<Typography variant="h4">Hello, {name}!</Typography>
			<Typography variant="h5">{greeting}</Typography>
			<Grid
				container
				my={1}
				spacing={3}>
				{cards}
			</Grid>
		</Box>
	);
}

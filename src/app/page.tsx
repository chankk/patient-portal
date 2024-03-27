import Box from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextCard from "./basic-card";

const cardData = [
	{
		heading: "Health Records",
		content: "Access your test results, immunizations and other medical information.",
	},
	{
		heading: "Appointment Calendar",
		content: "View, schedule, and manage your upcoming medical appointments.",
	},
	{
		heading: "Doctor Directory",
		content: "Connect with your healthcare providers and find up to date contact information.",
	},
];

const cards = cardData.map((card) => {
	return (
		<TextCard
			key={card.heading}
			heading={card.heading}
			content={card.content}></TextCard>
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
			<Stack
				direction="row"
				spacing={{ lg: 3 }}
				my={{ lg: 3 }}
				flexWrap="wrap">
				{cards}
			</Stack>
		</Box>
	);
}

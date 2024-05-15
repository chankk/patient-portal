import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@/app/components/card";
import { navLinks } from "@/app/navigation/nav-links";

const name = "Rosalie";
const greeting = "It's great to have you here.";

export default function Home() {
	return (
		<Box component="main">
			<Typography variant="h4">Hello, {name}!</Typography>
			<Typography variant="h5">{greeting}</Typography>
			<Grid container my={1} spacing={3}>
				{navLinks.map((item) => {
					return (
						<Grid item key={item.label} lg={3}>
							<Card heading={item.label} content={item.description} href={item.path}></Card>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

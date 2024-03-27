import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard({ heading, content }) {
	return (
		<Card>
			<CardActionArea>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div">
						{heading}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary">
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

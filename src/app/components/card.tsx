import * as React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import MaterialCard from "@mui/material/Card";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";

export default function Card({ content, heading, href }) {
	return (
		<MaterialCard sx={{ flexGrow: "1" }}>
			<CardActionArea
				component={NextLink}
				href={href}>
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
		</MaterialCard>
	);
}

"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavigationDrawer from "@/app/navigation/nav-drawer";
import TopAppBar from "@/app/navigation/top-app-bar";

export default function Navigation() {
	const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

	function toggleDrawer() {
		setDrawerOpen(!isDrawerOpen);
	}

	function closeDrawer() {
		setDrawerOpen(false);
	}

	return (
		<Box>
			<Grid item xs={12}>
				<TopAppBar handleMenuClick={toggleDrawer} />
			</Grid>
			<Grid item xs="auto">
				<NavigationDrawer isOpen={isDrawerOpen} close={closeDrawer} />
			</Grid>
		</Box>
	);
}

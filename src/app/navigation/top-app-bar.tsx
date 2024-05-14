"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopAppBar({ handleMenuClick }: { handleMenuClick: () => void }) {
	return (
		<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Toolbar>
				<IconButton size="large" color="inherit" onClick={handleMenuClick}>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap component={NextLink} href="/">
					Patient Portal
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

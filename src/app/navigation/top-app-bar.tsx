"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import NextLink from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, Notifications } from "@mui/icons-material";

export default function TopAppBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const menuId = "account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Settings</MenuItem>
			<MenuItem onClick={handleMenuClose}>Log out</MenuItem>
		</Menu>
	);
	return (
		<AppBar
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Typography
					variant="h6"
					noWrap
					component={NextLink}
					href="/">
					Patient Portal
				</Typography>
				<Box>
					<IconButton
						size="large"
						aria-label="show 2 new notifications"
						color="inherit">
						<Badge
							badgeContent={2}
							color="error">
							<Notifications />
						</Badge>
					</IconButton>
					<IconButton
						size="large"
						edge="end"
						aria-label="account of current user"
						aria-controls={menuId}
						aria-haspopup="true"
						onClick={handleProfileMenuOpen}
						color="inherit">
						<AccountCircle />
					</IconButton>
				</Box>
			</Toolbar>
			{renderMenu}
		</AppBar>
	);
}

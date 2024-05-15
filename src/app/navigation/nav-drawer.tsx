"use client";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NextLink from "next/link";
import Toolbar from "@mui/material/Toolbar";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { navLinks } from "@/app/navigation/nav-links";

export default function NavigationDrawer({ isOpen }: { isOpen: boolean }) {
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.only("xs"));
	const drawerWidth = "15em";

	return (
		<Drawer
			open={isOpen}
			variant={xs ? "temporary" : "persistent"}
			sx={{
				width: isOpen ? drawerWidth : 0,
				[`& .MuiDrawer-paper`]: { width: isOpen ? drawerWidth : 0 },
			}}>
			<Toolbar />
			<Box overflow="auto">
				<List>
					{navLinks.map((item) => (
						<ListItem key={item.label} disablePadding>
							<ListItemButton component={NextLink} href={item.path}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText>{item.label}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
}

"use client";
import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HistoryIcon from "@mui/icons-material/History";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NextLink from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import Toolbar from "@mui/material/Toolbar";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import PlaceIcon from "@mui/icons-material/Place";

const links = [
	{ label: "Health Records", href: "/health-records", icon: <ArticleIcon /> },
	{ label: "Past Visits", href: "/past-visits", icon: <HistoryIcon /> },
	{ label: "Doctor Directory", href: "/doctor-directory", icon: <PersonIcon /> },
	{ label: "Medical Map", href: "/map", icon: <PlaceIcon /> },
];
const listItems = links.map((item) => {
	return (
		<ListItem key={item.label} disablePadding>
			<ListItemButton component={NextLink} href={item.href}>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText>{item.label}</ListItemText>
			</ListItemButton>
		</ListItem>
	);
});

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
				<List>{listItems}</List>
			</Box>
		</Drawer>
	);
}

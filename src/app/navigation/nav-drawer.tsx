import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HistoryIcon from "@mui/icons-material/History";
import NextLink from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const links = [
	{ label: "Health Records", href: "/health-records", icon: <ArticleIcon /> },
	{ label: "Past Visits", href: "/past-visits", icon: <HistoryIcon /> },
	{ label: "Doctor Directory", href: "/doctor-directory", icon: <PersonIcon /> },
];
const listItems = links.map((item) => {
	return (
		<ListItem
			key={item.label}
			disablePadding>
			<ListItemButton
				component={NextLink}
				href={item.href}>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText>{item.label}</ListItemText>
			</ListItemButton>
		</ListItem>
	);
});

export default function NavigationDrawer() {
	return (
		<Drawer
			variant="permanent"
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
			}}>
			<Toolbar />
			<Box sx={{ overflow: "auto" }}>
				<List>{listItems}</List>
			</Box>
		</Drawer>
	);
}

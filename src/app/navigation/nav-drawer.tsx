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
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/navigation/nav-links";

export default function NavigationDrawer({ isOpen, close }: { isOpen: boolean; close: () => void }) {
	const theme = useTheme();
	const xs = useMediaQuery(theme.breakpoints.only("xs"));
	const drawerWidth = xs ? "100%" : "15em";
	const currentPath = usePathname();

	function handleClick() {
		// close temporary drawer on navigate (for small screens)
		if (xs) {
			close();
		}
	}

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
							<ListItemButton component={NextLink} href={item.path} onClick={handleClick} selected={currentPath.startsWith(item.path)}>
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

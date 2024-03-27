import { Article, CalendarMonth, Mail, Person } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";

const drawerWidth = 240;
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
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Article />
							</ListItemIcon>
							<ListItemText>Health Records</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<CalendarMonth />
							</ListItemIcon>
							<ListItemText>Appointments</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText>Doctors</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Mail />
							</ListItemIcon>
							<ListItemText>Messages</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}

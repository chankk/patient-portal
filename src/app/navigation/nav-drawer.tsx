import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HistoryIcon from "@mui/icons-material/History";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import Toolbar from "@mui/material/Toolbar";

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
								<ArticleIcon />
							</ListItemIcon>
							<ListItemText>Health Records</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<HistoryIcon />
							</ListItemIcon>
							<ListItemText>Past Visits</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>Doctor Directory</ListItemText>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText>Messages</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
}

import ArticleIcon from "@mui/icons-material/Article";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import { ReactElement } from "react";

interface NavLink {
	label: string;
	description: string;
	path: string;
	icon: ReactElement;
}

export const navLinks: NavLink[] = [
	{
		label: "Health Records",
		description: "Access your test results, immunization record and other medical information.",
		path: "/health-records",
		icon: <ArticleIcon />,
	},
	{
		label: "Past Visits",
		description: "Review past medical visits, such as hospitlizations and specialist appointments.",
		path: "/past-visits",
		icon: <HistoryIcon />,
	},
	{
		label: "Doctor Directory",
		description: "Connect with your healthcare providers, find contact information and schedule appointments.",
		path: "/doctor-directory",
		icon: <PersonIcon />,
	},
	{
		label: "Medical Map",
		description: "Locate clinics, hospitals and healthcare providers near you.",
		path: "/map",
		icon: <PlaceIcon />,
	},
];

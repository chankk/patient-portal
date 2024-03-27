import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "@/app/theme";
import Toolbar from "@mui/material/Toolbar";

import "./globals.css";
import NavigationDrawer from "@/app/navigation/nav-drawer";
import TopAppBar from "@/app/navigation/top-app-bar";

export const metadata: Metadata = {
	title: "Patient Portal",
	description: "Patient Portal provides you access to your medical information and connects you to healthcare professionals.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Box sx={{ display: "flex" }}>
							<TopAppBar></TopAppBar>
							<NavigationDrawer></NavigationDrawer>
							<Box sx={{ p: 3 }}>
								<Toolbar />
								{children}
							</Box>
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

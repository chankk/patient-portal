import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import TopAppBar from "@/app/navigation/top-app-bar";
import NavigationDrawer from "./navigation/nav-drawer";
import { Box, CssBaseline } from "@mui/material";

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
							{children}
						</Box>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

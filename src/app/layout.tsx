import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Toolbar from "@mui/material/Toolbar";

import theme from "@/app/theme";
import Navigation from "@/app/navigation/nav";
import "./globals.css";

export const metadata: Metadata = {
	title: "Patient Portal",
	description: "Patient Portal provides you access to your medical information and connects you to healthcare professionals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Grid container>
							<Navigation />
							<Grid item xs={true}>
								<Stack height="100vh">
									<Grid item>
										<Toolbar />
									</Grid>
									<Grid item xs={true} p={3}>
										{children}
									</Grid>
								</Stack>
							</Grid>
						</Grid>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

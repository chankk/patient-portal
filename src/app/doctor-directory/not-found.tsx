import Button from "@mui/material/Button";
import Link from "next/link";

export default function Error() {
	return (
		<main>
			<h2>Error</h2>
			<p>Unable to load doctors at this time. Please try again later.</p>
			<Button variant="contained" LinkComponent={Link} href="/">
				Back to Home
			</Button>
		</main>
	);
}

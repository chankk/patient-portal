import Button from "@mui/material/Button";
import Link from "next/link";

export default function NotFound() {
	return (
		<main>
			<h2>404 Not Found</h2>
			<p>Could not find the requested doctor.</p>
			<Button variant="contained" LinkComponent={Link} href="/doctor-directory">
				Back to Doctor Directory
			</Button>
		</main>
	);
}

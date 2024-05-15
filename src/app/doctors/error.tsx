"use client";
import Button from "@mui/material/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main>
			<h2>Something went wrong!</h2>
			<Button
				variant="contained"
				onClick={
					// Attempt to recover by trying to re-render the doctors route
					() => reset()
				}>
				Try again
			</Button>
		</main>
	);
}

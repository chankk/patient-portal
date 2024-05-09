import dynamic from "next/dynamic";
import { fetchLocations } from "../lib/data";

const Map = dynamic(() => import("./map"), { ssr: false, loading: () => <p>Loading</p> });

export default async function Page() {
	const locations = await fetchLocations().then((result) => JSON.parse(result));
	return <Map locations={locations} />;
}

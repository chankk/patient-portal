import dynamic from "next/dynamic";
import { fetchLocations } from "@/app/lib/data";
import { location } from "@prisma/client";

const Map = dynamic(() => import("./map"), { ssr: false, loading: () => <p>Loading</p> });

export default async function Page() {
	const locations: location[] = await fetchLocations().then((result) => JSON.parse(result));
	return <Map locations={locations} />;
}

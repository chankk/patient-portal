"use client";
import React, { useEffect, useRef } from "react";
import ArcgisMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import styles from "@/app/map/map.module.css";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

export default function Map() {
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapRef.current) {
			const map = new ArcgisMap({
				basemap: "arcgis/navigation",
			});

			const mapView = new MapView({
				container: mapRef.current,
				map: map,
				center: [0, 0], // [longitude, latitude]
				zoom: 3,
			});
		}
	}, []);

	return (
		<div className={styles.container}>
			<div ref={mapRef} className={styles.map}></div>
		</div>
	);
}

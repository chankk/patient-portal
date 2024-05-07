"use client";
import React, { useEffect, useRef } from "react";
import ArcgisMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import styles from "@/app/map/map.module.css";
import Point from "@arcgis/core/geometry/Point.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

const graphic = new Graphic({
	geometry: new Point({
		longitude: -114.81108100184484,
		latitude: 55.256313362295025,
		spatialReference: {
			wkid: 4326,
		},
	}),
});

const graphics = [graphic];

export default function Map() {
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapRef.current) {
			const map = new ArcgisMap({
				basemap: "arcgis/navigation",
			});

			const view = new MapView({
				container: mapRef.current,
				map: map,
				center: [-114, 55],
				zoom: 4,
			});

			const featureLayer = new FeatureLayer({
				fields: [
					{
						name: "id",
						alias: "ID",
						type: "oid",
					},
					{
						name: "latitude",
						alias: "Latitude",
						type: "double",
					},
					{
						name: "longitude",
						alias: "Longitude",
						type: "double",
					},
				],
				objectIdField: "id",
				geometryType: "point",
				spatialReference: { wkid: 4326 },
				source: graphics,
			});

			map.add(featureLayer);
		}
	}, []);

	return (
		<div className={styles.container}>
			<div ref={mapRef} className={styles.map}></div>
		</div>
	);
}

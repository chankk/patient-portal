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

const fields = [
	{
		name: "id",
		type: "oid",
	},
	{
		name: "name",
		type: "string",
	},
	{
		name: "address",
		type: "string",
	},
	{
		name: "locality",
		type: "string",
	},
];

const popupTemplate = {
	title: "{name}",
	content: "{address} {locality} AB",
};

export default function Map({ locations }) {
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

			const graphics = locations.map((location) => {
				return new Graphic({
					geometry: new Point({
						longitude: location.longitude,
						latitude: location.latitude,
						spatialReference: {
							wkid: 4326,
						},
					}),
					attributes: {
						id: location.id,
						name: location.name,
						address: location.address,
						locality: location.locality,
					},
				});
			});

			const featureLayer = new FeatureLayer({
				fields: fields,
				geometryType: "point",
				spatialReference: { wkid: 4326 },
				source: graphics,
				popupTemplate: popupTemplate,
			});

			map.add(featureLayer);
		}
	}, [locations]);

	return (
		<div className={styles.container}>
			<div ref={mapRef} className={styles.map}></div>
		</div>
	);
}

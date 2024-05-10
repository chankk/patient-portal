"use client";
import React, { useEffect, useRef } from "react";
import ArcgisMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import config from "@arcgis/core/config";
import styles from "@/app/map/map.module.css";
import Point from "@arcgis/core/geometry/Point.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Search from "@arcgis/core/widgets/Search.js";
import FeatureTable from "@arcgis/core/widgets/FeatureTable.js";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY;

export default function Map({ locations }) {
	const mapRef = useRef(null);
	const tableRef = useRef(null);
	const featureTable = useRef(null);

	useEffect(() => {
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
			fields: [
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
			],
			geometryType: "point",
			spatialReference: { wkid: 4326 },
			source: graphics,
			popupTemplate: {
				title: "{name}",
				content: "{address} {locality} AB",
			},
			renderer: {
				type: "simple",
				symbol: {
					type: "simple-marker",
					color: "#8e5776",
				},
			},
		});

		map.add(featureLayer);

		view.when(() => {
			const searchWidget = new Search({
				view: view,
			});

			view.ui.add(searchWidget, {
				position: "top-right",
				index: 0,
			});

			if (featureTable.current == null) {
				featureTable.current = new FeatureTable({
					view: view,
					layer: featureLayer,
					container: tableRef.current,
					visibleElements: {
						header: false,
						menu: false,
						selectionColumn: false,
						columnMenus: false,
					},
					tableTemplate: {
						columnTemplates: [
							{
								fieldName: "name",
								label: "Clinic",
								direction: "asc",
								initialSortPriority: 0,
							},
							{
								fieldName: "address",
								label: "Address",
							},
							{
								fieldName: "locality",
								label: "Location",
							},
						],
					},
				});
			}
			reactiveUtils.when(
				() => view.stationary,
				() => {
					// Filter out and show only the visible features in the feature table.
					featureTable.filterGeometry = view.extent;
				},
				{
					initial: true,
				}
			);
		});
	}, [locations]);

	return (
		<div className={styles.container}>
			<div ref={mapRef} className={styles.map}></div>
			<div ref={tableRef} className={styles.table}></div>
		</div>
	);
}

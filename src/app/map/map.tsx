"use client";
import React, { useEffect, useRef, useState } from "react";
import config from "@arcgis/core/config";
import ArcgisMap from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import FeatureTable from "@arcgis/core/widgets/FeatureTable.js";
import Graphic from "@arcgis/core/Graphic.js";
import MapView from "@arcgis/core/views/MapView";
import Point from "@arcgis/core/geometry/Point.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import Search from "@arcgis/core/widgets/Search.js";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import { location } from "@prisma/client";
import styles from "@/app/map/map.module.css";

config.apiKey = process.env.NEXT_PUBLIC_ARCGIS_KEY as string;

export default function Map({ locations }: { locations: location[] }) {
	const mapRef = useRef<HTMLDivElement>(null);
	const tableRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (mapRef.current) {
			const map = new ArcgisMap({
				basemap: "arcgis/navigation",
			});

			const view = new MapView({
				container: mapRef.current,
				map: map,
				center: [-114, 55], // alberta
				zoom: 4,
			});

			const graphics = locations.map((location: location) => {
				return new Graphic({
					geometry: new Point({
						longitude: location.longitude as any as number,
						latitude: location.latitude as any as number,
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
					overwriteActions: true,
					actions: [],
				},
				renderer: new SimpleRenderer({
					symbol: new SimpleMarkerSymbol({
						color: "#8e5776",
					}),
				}),
			});

			map.add(featureLayer);

			view.when(() => {
				if (tableRef.current !== null) {
					const searchWidget = new Search({
						view: view,
					});

					view.ui.add(searchWidget, {
						position: "top-right",
						index: 0,
					});

					const featureTable = new FeatureTable({
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
									type: "field",
									fieldName: "name",
									label: "Clinic",
									direction: "asc",
									initialSortPriority: 0,
								},
								{
									type: "field",
									fieldName: "address",
									label: "Address",
								},
								{
									type: "field",
									fieldName: "locality",
									label: "Location",
								},
							],
						},
					});

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
				}
			});
		}
	}, [locations]);

	return (
		<div className={styles.container}>
			<div ref={mapRef} className={styles.map}></div>
			<div ref={tableRef} className={styles.table}></div>
		</div>
	);
}

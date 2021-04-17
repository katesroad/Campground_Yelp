import * as React from 'react'
import mapboxgl from 'mapbox-gl'
import { Wrapper } from './styles'
import { MapGeoJsonFeature } from 'types'
import { Spinner } from 'components/lib'

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_ACESS_TOKEN as string

type CampsOnMapProps = {
  features: MapGeoJsonFeature[]
}

const CampsOnMap: React.FC<CampsOnMapProps> = ({ features }) => {
  const data = {
    features,
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
    },
  }

  React.useEffect(() => {
    const map: any = new mapboxgl.Map({
      container: 'campsOnMap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-95.712891, 37.090246],
      zoom: 4,
    })
    map.on('load', function () {
      map.addSource('camps', {
        type: 'geojson',
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
        data,
      })

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'camps',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
          ],
        },
      })

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'camps',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
      })

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'camps',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      })

      // inspect a cluster on click
      map.on('click', 'clusters', function (e: any) {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        })
        const clusterId = features[0]?.properties?.cluster_id
        map
          .getSource('camps')
          .getClusterExpansionZoom(
            clusterId,
            function (err: any, zoom: number) {
              if (err) return

              map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom,
              })
            }
          )
      })

      map.on('click', 'unclustered-point', function (e: any) {
        const coordinates = e.features[0].geometry.coordinates.slice()
        const mag = e.features[0].properties.mag
        let tsunami

        if (e.features[0].properties.tsunami === 1) {
          tsunami = 'yes'
        } else {
          tsunami = 'no'
        }

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML('magnitude: ' + mag + '<br>Was there a tsunami?: ' + tsunami)
          .addTo(map)
      })

      map.on('mouseenter', 'clusters', function () {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', 'clusters', function () {
        map.getCanvas().style.cursor = ''
      })
    })
    return () => {
      map.remove()
    }
  }, [features])

  return (
    <Wrapper id="campsOnMap">
      {features.length > 0 ? null : <Spinner />}
    </Wrapper>
  )
}

export default React.memo(CampsOnMap)

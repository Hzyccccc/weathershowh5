/* eslint-disable */
// import http from 'src/http.js'
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
// import {showserver} from 'src/main';

export var map;
export var test1 = 1111;
var y0 = 0;
var x0 = 70;
var splitNum = 0.05;
mapboxgl.accessToken = 'pk.eyJ1IjoidHd0aW1lcyIsImEiOiJjanl4c2tkdnYwenVuM210YXhjdGg3OTljIn0.4hACBWooh6zXxfUFoOo1jw'
var imageURL = 'http://t0.tianditu.gov.cn/vec_w/wmts?' +
  'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
  '&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=34bf05f5c6f63bf558240af5dea1026a';
var cavURL = 'http://t0.tianditu.gov.cn/cva_w/wmts?' +
    'SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles' +
    '&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=34bf05f5c6f63bf558240af5dea1026a';
export function init(that) {
console.log(that.$refs);

  map = new mapboxgl.Map({
    container: that.$refs.basicMapbox,
    style: {
      'version': 8,
      'sources': {
        'raster-tiles': {
          'type': 'raster',
          'tiles': [imageURL],
          'tileSize': 256
        },
        'cva-tiles': {
          'type': 'raster',
          'tiles': [cavURL],
          'tileSize': 256
        }
      },
      'layers': [{
        'id': 'simple-tiles',
        'type': 'raster',
        'source': 'raster-tiles',
        'minzoom': 0,
        'maxzoom': 18
      }, {
        'id': 'cva-tiles',
        'type': 'raster',
        'source': 'cva-tiles',
        'minzoom': 0,
        'maxzoom': 18
      }],
      'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf'
    },
    // style: 'mapbox://styles/mapbox/satellite-v9',
    center: [116.3975298068, 39.9176060416], // 设置地图中心
    zoom: 8 // 设置地图比例
  });
  // 禁止地图旋转
  map.touchZoomRotate.disableRotation();
  // 设置语言
  var language = new MapboxLanguage({defaultLanguage: 'zh'});
  map.addControl(new mapboxgl.ScaleControl());
  // map.addControl(new mapboxgl.NavigationControl());
  map.addControl(language);
  // 使用定位模块
  // map.addControl(new mapboxgl.GeolocateControl({
  //   positionOptions: {
  //     enableHighAccuracy: true
  //   },
  //   trackUserLocation: true,
  //   showUserLocation: true,
  //   zoom: 8
  // }));
  
}

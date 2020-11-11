
import leaflet from 'leaflet' 
import markerIcon from '../images/logoIcon.svg';


const mapIcon=leaflet.icon({
    iconUrl:markerIcon,
    iconSize: [50,50],
    iconAnchor:[25,50],
    popupAnchor:[170,2]
  })

  export default mapIcon
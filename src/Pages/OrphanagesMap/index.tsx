import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { FiPlus, FiArrowRight } from 'react-icons/fi';
import markerIcon from '../../images/logoIcon.svg';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
  id: number,
  longitude: number,
  latitude: number,
  name: string
}

const OrphanagesMap: React.FC = () => {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
 
  useEffect(() => {
    api.get('orphanages')
      .then(res => {
        setOrphanages(res.data)
      })

  }, [])

  return (
    <Container>
      <aside>
        <header>
          <img src={markerIcon} alt="Happy" />

          <h2>Escolha o orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Moçambique</strong>
          <span>Maputo</span>
        </footer>
      </aside>

      <Map
        center={[-25.9523097, 32.5927545]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {
          orphanages.map(orphanage => {
            return (
              <Marker
                position={[orphanage.latitude, orphanage.longitude]}
                icon={mapIcon}
                key={orphanage.id}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                  {orphanage.name}
                  <Link to={`orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF" />
                  </Link>
                </Popup>
              </Marker>

            )

          })
        }

      </Map>

      <Link to='orphanages/create' className='create-orphanage'>
        <FiPlus size={36} color="#FFF" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;

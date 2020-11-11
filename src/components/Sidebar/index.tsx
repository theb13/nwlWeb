import React from 'react';
import { Container } from './styles';

import mapMarkerImg from '../../images/logoIcon.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
     <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </Container>
  );
};

export default Sidebar;

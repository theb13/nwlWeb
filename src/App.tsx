import React from 'react';
import Routes from './config/router';
import { GlobalStyle } from './styles/GlobalStyle';
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;

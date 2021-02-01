import React from 'react';

import Row from './components/Row';
import Banner from './components/Banner';

import requests from './utils/requests';

import './styles/App.css';

function App() {
  return (
    <div className="app">
      {/* Navbar*/}
      <Banner />

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Space Documentaries" fetchUrl={requests.fetchSpaceDocumentaries} isLargeRow/>

    </div>
  );
}

export default App;

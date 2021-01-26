import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';

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

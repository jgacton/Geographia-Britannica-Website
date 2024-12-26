import React from 'react';
import Layout from '../components/Layout';

const Roadmap = () => {
  return (
    <Layout>
      <div className="main">
        <br />
        <p className="uppercase-subtitle">Roadmap</p>
        <p className="body-text">
          Build out this website and set up web hosting.<br />
          Construct a first iteration of the Atlas, with simple data layers and controls.<br />
          Develop a data pipeline to ingest and process data from a variety of sources.<br />
          Assemble a library of data about the UK from public and private sources.<br />
          Continue to iterate the Atlas, adding new data layers and improving the interface.<br />
          Formally set up as a non-profit and seek funding to expand the team and the scope to provide consulting services.<br />
        </p>
        <br />
      </div>
    </Layout>
  );
};

export default Roadmap;
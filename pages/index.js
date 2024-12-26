import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
      <Layout>
        <div className="main">
          <br />
          <p className="uppercase-subtitle">Atlas</p>
          <p className="body-text">
            A complete, online, interactive geographical survey of Britain and its place in the world.
          </p>
          <br />
        </div>
      </Layout>
  );
};

export default Home;
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="main">
        <br />
        <p className="uppercase-subtitle">About</p>
        <p className="body-text">
          The idea began in 2021 when my Grandmother gave me a set of old energy maps showing coal deposits, oil fields,
          pipelines, refineries, and basic demographic and economic data.<br />
          I thought, "Where can I find this data now, in an online, interactive, free, open-source format?"<br />
          I couldn't find it, so I decided to build it.<br />
        </p>
        <br />
      </div>
    </Layout>
  );
};

export default About;
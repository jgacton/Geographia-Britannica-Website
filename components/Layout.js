import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Geographia Britannica</title>
        <meta name="description" content="A complete, online, interactive geographical survey of Britain and its place in the world." /> 
        <meta name="keywords" content="geography, Britain, online, interactive, map, atlas" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

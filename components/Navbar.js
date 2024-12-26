import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link href="/atlas">Atlas</Link></li>
        <li><Link href="/vision">Vision</Link></li>
        <li><Link href="/roadmap">Roadmap</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
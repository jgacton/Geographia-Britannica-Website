import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <a className="link linkedin" href="https://www.linkedin.com/company/geographiabritannica">
          <i className="fab fa-2x fa-linkedin"></i>
        </a>
        <a className="link x" href="https://x.com/geobritannica">
          <i className="fab fa-2x fa-x-twitter"></i>
        </a>
        <a className="link github" href="https://github.com/Geographia-Britannica">
          <i className="fab fa-2x fa-github"></i>
        </a>
        <a className="link instagram" href="https://www.instagram.com/geographiabritannica/">
          <i className="fab fa-2x fa-instagram"></i>
        </a>
        <a className="link youtube" href="https://www.youtube.com/@GeographiaBritannica">
          <i className="fab fa-2x fa-youtube"></i>
        </a>
        <a className="link facebook" href="https://www.facebook.com/profile.php?id=61570423326861">
          <i className="fab fa-2x fa-facebook-f"></i>
        </a>
      </div>
      <a href="mailto:admin@geographiabritannica.org">admin@geographiabritannica.org</a>
    </div>
  );
};

export default Footer;
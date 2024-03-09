import React from 'react';
import './Header.css'; 
const Header = () => {
  return (
    <header className="menu-header">
      <div className="logo-container">
        <img src="https://th.bing.com/th/id/R.db5570b95bd8a595979ffb2057308fff?rik=j569oIusiDNLdg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fMcDonalds_logo.png&ehk=8WJyO0L9iEnTbyfsGQdEAYgjRE2wB15WAugZSz%2bR5DM%3d&risl=&pid=ImgRaw&r=0" alt="Restaurant Logo" className="logo" />

        {/* Restaurant name */}
        <h1 className="restaurant-name">Mc Donold</h1>
      </div>
    </header>
  );
};

export default Header;

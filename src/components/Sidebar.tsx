import React from "react";

const Sidebar = () => (
  <div className="sidebar" data-color="white" data-active-color="danger">
    <div className="logo">
      <a href="/" className="simple-text logo-mini">
        <div className="logo-image-small">
          <img src="//api.adorable.io/avatars/150" />
        </div>
      </a>
      <a href="/" className="simple-text logo-normal">
        <div className="logo-image-big">JANE DOE</div>
      </a>
    </div>
    <div className="sidebar-wrapper">
      <ul className="nav">
        <li className="active ">
          <a href="./dashboard.html">
            <i className="nc-icon nc-chart-bar-32"></i>
            <p>Dashboard</p>
          </a>
        </li>
        <li>
          <a href="./icons.html">
            <i className="nc-icon nc-app"></i>
            <p>Produits</p>
          </a>
        </li>
        <li>
          <a href="./map.html">
            <i className="nc-icon nc-box-2"></i>
            <p>Stocks</p>
          </a>
        </li>
        <li>
          <a href="./notifications.html">
            <i className="nc-icon nc-pin-3"></i>
            <p>Emplacements</p>
          </a>
        </li>
        <li>
          <a href="./user.html">
            <i className="nc-icon nc-delivery-fast"></i>
            <p>Fournisseurs</p>
          </a>
        </li>
        <li>
          <a href="./tables.html">
            <i className="nc-icon nc-settings-gear-65"></i>
            <p>Paramètres</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;

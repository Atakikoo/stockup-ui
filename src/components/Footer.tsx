import React from "react";

const Footer = () => (
  <footer className="footer footer-black  footer-white ">
    <div className="container-fluid">
      <div className="row">
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/" target="_blank">
                A propos
              </a>
            </li>
          </ul>
        </nav>
        <div className="credits ml-auto">
          <span className="copyright">
            made with <i className="fa fa-heart heart"></i>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

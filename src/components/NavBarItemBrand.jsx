//R34c7
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './NavBarItemBrand.scss';

const NavBarItem = ({ name, url }) => {
  return (
    <>
      <Link to={url}>
        <div class="containerx">
          <div class="box">
              <div class="title">
                  <span class="block"></span>
                  <h1 class="logo-text">{name}<span></span></h1>
              </div>
              <div class="role">
                  <div class="block"></div>
                  <p>Smart Clothing</p>
              </div>
          </div>
      </div>
      </Link>
    </>
  );
};

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBarItem;

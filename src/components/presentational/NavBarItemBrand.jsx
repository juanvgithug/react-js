//R34c7
import React from "react";
import PropTypes from "prop-types";

const NavBarItem = ({ name, url }) => {
  return (
      <a href={url} className="logo-text">{name}</a>
  );
};

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBarItem;

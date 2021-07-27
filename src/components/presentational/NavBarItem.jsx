//R34c7
import React from "react";
import PropTypes from "prop-types";

const NavBarItem = ({ name, url }) => {
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBarItem;

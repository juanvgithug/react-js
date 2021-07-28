//R34c7
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./NavBarItem.scss";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarItem = (props) => {
  const icon = props.icon;
  //console.log(icon);
  return (
    <div className="neonItem">
      <li style={{ textAlign: "center", marginTop: 7.8 }}>
        <NavLink to={props.url}>
          {"\u00A0"}
          {
            <FontAwesomeIcon
              icon={icon}
              style={{ textAlign: "center", marginTop: 5.2 }}
            />
          }
          {"\u00A0"}
          {props.name}
        </NavLink>
      </li>
    </div>
  );
};

NavBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavBarItem;

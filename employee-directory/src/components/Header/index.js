import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
      <>
    <header className="header">
      <h1>{title}</h1>
    </header>
    

    </>
  );
};

Header.defaultProps = {
  title: "Employee Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

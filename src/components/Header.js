import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1 className="header">
        {title}
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        />
      </h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {

  return (
    <button className="btn" style={{ backgroundColor:color }} onClick={onClick}>
      {text}
    </button>
  );
};
Button.defaultProps = {
    color: 'steelblue',
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;

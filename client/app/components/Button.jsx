import React from 'react';

const Button = ({ handleClick, text }) => (
  <div className="button">
    <div className="round-button">
      <div className="round-button-circle">
        <button
          href="http://example.com"
          className="go-button"
          onClick={handleClick}
        >
          {text}
        </button>
      </div>
    </div>
  </div>
);

Button.propTypes = {
  handleClick: React.PropTypes.func,
  text: React.PropTypes.string,
};

export default Button;

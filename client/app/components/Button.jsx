import React from 'react';

const Button = ({ handleClick }) => (
  <div className="button">
    <div className="round-button">
      <div className="round-button-circle">
        <button
          href="http://example.com"
          className="go-button"
          onClick={handleClick}
        >
          GO
        </button>
      </div>
    </div>
  </div>
);

Button.propTypes = { handleClick: React.PropTypes.func };

export default Button;

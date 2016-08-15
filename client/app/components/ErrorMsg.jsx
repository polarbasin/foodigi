import React from 'react';

const ErrorMsg = ({ errorMsg }) => (
  <div>
    <h3>Error:</h3>
    <p>{errorMsg}</p>
  </div>
);

ErrorMsg.propTypes = {
  errorMsg: React.PropTypes.string,
};

export default ErrorMsg;

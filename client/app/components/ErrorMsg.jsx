import React from 'react';

const ErrorMsg = ({ errorMsg }) => (
  <div className="question">
    <p>Error:</p><br />
    <p>{errorMsg}</p>
  </div>
);

ErrorMsg.propTypes = {
  errorMsg: React.PropTypes.string,
};

export default ErrorMsg;

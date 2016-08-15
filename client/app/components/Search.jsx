import React from 'react';

const Search = ({ onInput }) => (
  <div
    className="input-container"
  >
    <input
      style={{
        backgroundImage: 'url(assets/cursor.gif)',
      }}
      type="text"
      // placeholder="Chicken"
      className="foodSearch"
      onChange={onInput}
    />
  </div>
);

Search.propTypes = { onInput: React.PropTypes.func };

export default Search;

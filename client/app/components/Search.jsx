import React from 'react';

const Search = ({ onInput }) => (
  <div>
    <input
      type="text"
      placeholder=". . ."
      name="foodsearch"
      onChange={onInput}
      autoFocus
    />
  </div>
);

Search.propTypes = { onInput: React.PropTypes.func };

export default Search;

import React from 'react';

const Search = ({ handleInputChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="search-form">
    <label className="is-hidden">Search</label>
    <input onChange={handleInputChange} type="text" name="search" />
    <button type="submit" className="search-button" placeholder="Search...">
      Submit
    </button>
  </form>
);

export default Search;

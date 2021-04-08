import React from 'react';

const SearchPosts = () => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Author"
        aria-label="Author"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchPosts;

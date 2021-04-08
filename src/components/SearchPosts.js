import React from 'react';

const SearchPosts = () => {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Author"
        aria-label="Author"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchPosts;

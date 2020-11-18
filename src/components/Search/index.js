import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={event => this.handleInputChange(event)}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Name"
          id="search" />
      </div>
    </form>
  );
}

export default SearchBar;


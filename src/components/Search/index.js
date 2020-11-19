import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={event => props.handleInputChange(event)}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Name"
          id="search" />
          <div>
            <br/>
          </div>
      </div>
    </form>
  );
}

export default SearchBar;


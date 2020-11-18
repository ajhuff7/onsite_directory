import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={(event) => props.handleName}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Name"
          id="search" />
        <div className="buttonCenter">
          <button className="btn is-dark is-outlined is-rounded" onClick={props.handleButtonSubmit}>
            Search
        </button>
        <br />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;

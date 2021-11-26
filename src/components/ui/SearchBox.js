import React from "react";

const SearchBox = (props) => {
    const { query, setSearchQuery } = props;

    return (
        <input
            type="text"
            autoFocus
            className="form-control search"
            value={query}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو"
        />
    );
};

export default SearchBox;

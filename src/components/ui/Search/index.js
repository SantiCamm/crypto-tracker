import React, { useState } from "react";
import {SearchContainer, SearchForm, SearchInput} from './SearchElements'

const Search = ({getQuery}) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
      setText(q);
      getQuery(q);

  }
  return (
    <SearchContainer>
      <SearchForm onSubmit={e => e.preventDefault()}>
        <SearchInput
          type="text"
          autoFocus
          value={text}
          placeholder="Search for crypto currencies"
          onChange={(e) => onChange(e.target.value)}
        />
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;

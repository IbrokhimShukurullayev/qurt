import React, { useState } from "react";
import Searchsection from "./Searchsection";
import { useGetSearchProductsQuery } from "../context/api/ProductApi";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState("")
  let {data}  = useGetSearchProductsQuery({q: value})

  return (
    <div className="search container">
      <div className="navbar__search">
          <input 
          // onFocus={()=> setShowSearch(true)}
          // onBlur={()=> setShowSearch(false)}
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text" 
          placeholder="Search..." />
          <button>Search</button>
          {
            // showSearch
             value.trim() ?
            <Searchsection data={data?.products}/>
            : <></>
          }
        </div>
    </div>
  );
};

export default Search;

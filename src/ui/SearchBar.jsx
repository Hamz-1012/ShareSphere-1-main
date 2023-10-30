/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  function handleSearchEnter(e) {
    if (e.key === 'Enter') {
      setSearchInput(e.target.value);

      console.log('hii');
      console.log(searchInput);
    }
  }

  function handleSearchIcon() {
    console.log(searchInput);
  }
  return (
    <>
  
        <div className=" ml-32 flex w-max items-center  rounded-full border  border-green-400 focus:border-green-500  focus:outline-none ">
          <input
            type="search"
            className="h-12 w-96   justify-self-center rounded-full border-none focus:outline-none focus:ring-0"
            placeholder="search "
            value={searchInput}
            onKeyDown={handleSearchEnter}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <BsSearch onClick={handleSearchIcon} className="cursor-pointer" />
        </div>
        
   
    </>
  );
}

export default SearchBar;

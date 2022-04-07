import React, { useContext, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import {
  clearResults,
  searchMovie,
} from "../../../../context/searchContext/apiCalls";
import { SearchContext } from "../../../../context/searchContext/SearchContext";
import { SearchResultItem } from "../searchResultItem/SearchResultItem";
import {
  NavSearch,
  NavSearchGroup,
  NavSearchResults,
  SearchLoading,
  SearchWrapper,
} from "./SearchStyles";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResultShow, setsearchResultShow] = useState(false);
  const { searchResults, searchLoading, searchError, dispatch } =
    useContext(SearchContext);

  const { toggleAside } = useContext(UtilContext);

  // focus search
  const searchRef = useRef(null);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus) {
      toggleAside(false);
      searchRef.current.focus();
      setFocus(false);
    }
  }, [focus]);

  // operate search
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchLoading) return;
    if (searchText.length > 2) {
      setsearchResultShow(true);
      searchMovie(searchText, dispatch);
    } else {
      setsearchResultShow(false);
      clearResults(dispatch);
    }
  }, [searchText]);

  // handle mobile search
  const [mobileSearch, toggleMobileSearch] = useState(false);
  const handleMobileSearch = () => {
    setFocus(true);
    toggleMobileSearch(!mobileSearch);
  };

  // close search
  const closeSearch = () => {
    setSearchText("");
    setsearchResultShow(false);
    toggleMobileSearch(false);
  };

  if (searchError) {
    // handle error
  }

  return (
    <SearchWrapper>
      <NavSearchGroup
        onClick={() => setFocus(true)}
        className={mobileSearch ? "mobileSearch" : null}
      >
        {searchResultShow ? (
          <ImCross onClick={() => closeSearch()} />
        ) : (
          <FaSearch />
        )}
        <NavSearch
          ref={searchRef}
          placeholder="Film Ara"
          type="text"
          value={searchText}
          onChange={handleSearch}
        />

        {searchResultShow && searchResults.length > 0 && (
          <NavSearchResults className={mobileSearch ? "mobileSearch" : null}>
            {!searchLoading ? (
              searchResults.map((movie) => {
                return (
                  <SearchResultItem
                    closeResults={() => closeSearch()}
                    key={movie._id}
                    {...movie}
                  ></SearchResultItem>
                );
              })
            ) : (
              <SearchLoading />
            )}
          </NavSearchResults>
        )}
      </NavSearchGroup>

      {/* mobile search */}
      {mobileSearch ? (
        <MdClose onClick={closeSearch} />
      ) : (
        <HiOutlineSearch onClick={handleMobileSearch} />
      )}
      {/* end of mobile search */}
    </SearchWrapper>
  );
};

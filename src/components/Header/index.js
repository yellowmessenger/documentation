import React from "react";
import styles from "./header.module.css";
import SearchBar from "../../theme/SearchBar";
import PopularSearches from "../PopularSearches";
import { popularSearchItems } from "../../constants";
const Header = () => {
  return (
    <header className={`${styles.hero}  ${styles.heroBanner}`}>
      <div className="container">
        <SearchBar displayAsInputBox />
        <PopularSearches items={popularSearchItems} />
      </div>
    </header>
  );
};

export default Header;

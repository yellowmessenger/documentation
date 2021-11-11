import React from "react";
import styles from "./header.module.css";
import SearchBar from "../../theme/SearchBar";

const Header = ({ title, description, placeholder }) => {
  return (
    <header className={`${styles.hero}  ${styles.heroBanner}`}>
      <div className="container">
        <h1 className={styles.hero_title}>{title}</h1>
        <p className={styles.hero_sub_title}>{description}</p>
        <SearchBar displayAsInputBox/>
      </div>
    </header>
  );
};

export default Header;

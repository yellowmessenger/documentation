import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import logo from "../../../static/img/logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [whiteNavbar, setWhiteNavbar] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      if (!whiteNavbar) {
        setWhiteNavbar(true);
      }
    } else {
      if (!whiteNavbar) {
        setWhiteNavbar(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  return (
    <Layout title="">
      <nav
        className={`${styles.navbar_container} ${
          whiteNavbar && styles.whiteNavbar
        }`}
      >
        <ul className={styles.left_menus}>
          <li className={styles.item}>
            <img src={logo} alt="yellow messenger" />
          </li>
          <li className={styles.item}>
            <Link to="/documentation">Documentation</Link>
          </li>
          <li className={styles.item}>
            <Link to="/docs/howtos/basics/create-a-bot">Developer</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cookbooks">Cookbooks</Link>
          </li>
          <li className={styles.item}>
            <Link to="">How to’s</Link>
          </li>
        </ul>
        <ul className={styles.right_menus}>
          <li className={styles.item}>
            <Link to="/documentation">
              Community <i className="ri-external-link-fill" />
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="/documentation">Sign up for free</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Navbar;

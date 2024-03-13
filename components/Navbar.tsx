import styles from "../styles/Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>LEFT SIDE</div>
      <div>CENTER</div>
      <div>RIGHT SIDE</div>
    </div>
  );
};

export default Navbar;

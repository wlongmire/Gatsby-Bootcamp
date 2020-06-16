import React from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/index.scss";
import styles from './layout.module.scss';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
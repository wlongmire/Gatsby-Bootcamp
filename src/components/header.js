import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import styles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.header}>
      <h1>
        <Link className={styles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link className={styles.navItem} activeClassName={styles.active} to="/">Home</Link></li>
          <li><Link className={styles.navItem} activeClassName={styles.active} to="/blog">Blog</Link></li>
          <li><Link className={styles.navItem} activeClassName={styles.active} to="/contact">Contact</Link></li>
          <li><Link className={styles.navItem} activeClassName={styles.active} to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
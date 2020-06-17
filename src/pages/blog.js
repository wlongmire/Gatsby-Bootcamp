import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from 'gatsby';
import styles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {

  const posts = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order:DESC
      }
    ){
      edges {
        node {
          title,
          slug,
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `).allContentfulBlogPost.edges;

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <div className={styles.posts}>
        {
          posts.map(post => {
            const link = `/blog/${post.node.slug}`;
            return (<div className={styles.post}>
              <Link to={link}>
                <h3>{post.node.title}</h3>
                <p>{post.node.publishedDate}</p>
              </Link>
            </div>);
          })
        }
      </div>
    </Layout >
  );
}

export default BlogPage;
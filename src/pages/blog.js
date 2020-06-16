import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title,
              date
            },
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `).allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>Blog</h1>
      {
        posts.map(post => {
          const link = `/blog/${post.node.fields.slug}`;
          return (<div>
            <h3><Link to={link}>{post.node.frontmatter.title}</Link></h3>
            <p>{post.node.frontmatter.date}</p>
          </div>);
        })
      }
    </Layout>
  );
}

export default BlogPage;
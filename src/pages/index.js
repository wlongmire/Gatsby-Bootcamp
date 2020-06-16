import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Warren :)</h2>
      <p>Contact me <Link to="/contact">here</Link></p>
    </Layout>
  );
}

export default IndexPage;
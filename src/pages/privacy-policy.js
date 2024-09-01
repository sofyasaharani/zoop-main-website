/** @format */

/** @format */

// src/pages/privacy-policy.js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../styles/privacy-policy.css";

const PrivacyPolicy = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="privacy-policy-container">
        <div
          className="privacy-policy-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/privacy-policy" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PrivacyPolicy;

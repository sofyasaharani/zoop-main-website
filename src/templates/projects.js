/** @format */

import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/project.module.css";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const NavLink = (props) => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span className={styles.disabledStyle}>{props.text}</span>;
  }
};

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext;
  const previousIndex = index - 1;
  const nextIndex = index + 1;

  const previousUrl =
    previousIndex === 1 ? "/zoop-daily/" : `/projects/${previousIndex}`;

  const nextUrl = `/zoop-daily/${nextIndex}`;

  // Generate pagination numbers
  const paginationNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    const url = i === 1 ? `/zoop-daily/` : `/zoop-daily/${i}`;
    paginationNumbers.push(<NavLink key={i} test={false} url={url} text={i} />);
  }

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Zoop Daily</h2>
        <div className={styles.projects}>
          {group.map((project) => (
            <div key={project.id}>
              <GatsbyImage
                image={
                  project.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt="project image"
              />

              <h3>{project.title}</h3>
              <h5>
                By {project.author.node.name} On {project.date}
              </h5>
              <div
                className={styles.html}
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
              <Link to={project.slug}>Read More</Link>
            </div>
          ))}
        </div>
        <div className={styles.line}></div>
        <div className={styles.projectsLink}>
          <NavLink test={first} url={previousUrl} text="Previous Page" />
          <div className={styles.pagination}>{paginationNumbers}</div>
          <NavLink test={last} url={nextUrl} text="Next Page" />
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;

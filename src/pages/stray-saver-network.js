/** @format */

import React, { useState, useRef } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import "../styles/home.css";
import {
  FaCheck,
  FaArrowRight,
  FaStar,
  FaRegMoneyBillAlt,
  FaPeopleArrows,
  FaGlobeAmericas,
  FaGlobeAsia,
} from "react-icons/fa";

import { IoChatbox } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/stray.module.css";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  const blogPosts = data.allWpPost.nodes; // Fetch blog posts
  const scrollerRef = useRef(null);
  let isDragging = false;
  let startX, scrollLeft;

  const onMouseDown = (e) => {
    isDragging = true;
    scrollerRef.current.classList.add("active");
    startX = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeft = scrollerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging = false;
    scrollerRef.current.classList.remove("active");
  };

  const onMouseUp = () => {
    isDragging = false;
    scrollerRef.current.classList.remove("active");
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for sensitivity
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const timelineSlides = [
    {
      steps: [
        {
          title: "Step 1",
          subtitle: "enrollment",
          titleDesc: "Register with Zoop",
          description: "Fill out the registration form to join our network.",
          image: "../images/timeline-step-1.jpg",
        },
        {
          title: "Step 2",
          subtitle: "what it takes",
          titleDesc: "Eligibility",
          description:
            "Registered NGO's and individuals involved in feeding, rescuing, or treating stray animals are eligible to receive funds",
          image: "../images/timeline-step-1.jpg",
        },
        {
          title: "Step 3 ",
          subtitle: "administering",
          titleDesc: "Fund Distibution",
          description:
            "Donation collected through the Zoop : Paw Protection Fund will be distributed among members of the Zoop: Stray SAver Network based on need an impact",
          image: "../images/timeline-step-1.jpg",
        },
        {
          title: "Step 4 ",
          subtitle: "transparacy",
          titleDesc: "Transparancy",
          description:
            "Regular updates and reports will be provided on how the funds are being utilized",
          image: "../images/timeline-step-1.jpg",
        },
      ],
    },
  ];

  const registerSlides = [
    {
      icon: "FaRegMoneyBillAlt",
      title: "Financial Support",
      description:
        "Gain access to funds that can help you provide essential services to stray animals.",
    },
    {
      icon: "FaGlobeAsia",
      title: "Community Network",
      description: "Connect with like-minded individuals and organizations.",
    },
    {
      icon: "FaPeopleArrows",
      title: "Enhanced Impact",
      description:
        "Amplify your efforts and reach more animals in need with the support of Zoop's community.",
    },
  ];
  const iconMap = {
    FaRegMoneyBillAlt: FaRegMoneyBillAlt,
    FaPeopleArrows: FaPeopleArrows,
    FaGlobeAsia: FaGlobeAsia,
  };
  return (
    <Layout>
      <div className={styles.containerStray}>
        <section className={styles.firstHeader}>
          <h1>Stray Saver Network</h1>
          <img src="../images/stray-saver-banner.png" alt="Zoop Logo" />
        </section>

        <section className={styles.secondHeader}>
          <div className={styles.imageContainer}>
            <img
              src="../images/stray-saver-banner-1.png"
              alt="Zoop Logo"
              className={styles.imageOne}
            />
            <img
              src="../images/welcome-banner-1.png"
              alt="Zoop Logo"
              className={styles.imageTwo}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>Stray Saver Network</h1>
            <p>
              We are inviting NGOs and individuals dedicated to the animal
              welfare cause to register with us. Through this network, we aim to
              support various initiatives that provide feeding, rescuing, and
              treating stray animals. By joining us, you can receive financial
              assistance from the Zoop: Paw Protection Fund to further your
              mission and make a significant impact on the lives of stray
              animals.
            </p>
          </div>
        </section>
        <section className={styles.thirdHeader}>
          <h1>How It Works?</h1>
          <div className={styles.timelineSliderContainer}>
            <div
              className={styles.timelineScroller}
              ref={scrollerRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}>
              {timelineSlides.map((slide, index) => (
                <div key={index} className={styles.timelineSlide}>
                  <div className={styles.timelineContentWrapper}>
                    {slide.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className={styles.timelineContent}>
                        <div className={styles.step}>
                          <h2>{step.title}</h2>
                          <h5>{step.subtitle}</h5>
                        </div>
                        <div className={styles.lineGraph}>
                          <div className={styles.graphLine}></div>
                          <div className={styles.graphCircle}></div>
                        </div>
                        <div className={styles.iconContainer}>
                          <h5>{step.titleDesc}</h5>
                          <p className={styles.description}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.fourHeader}>
          <div className={styles.content}>
            <h1>The Growing Stray Saver Network</h1>
            <span>
              <h1>6+</h1>
              <p>NON Profit</p>
            </span>
            <span>
              <h1>30+</h1>
              <p>Rescuers</p>
            </span>
            <span>
              <h1>40+</h1>
              <p>Feeders</p>
            </span>
          </div>
        </section>

        <section className={styles.thirdHeader}>
          <h1>Why Register?</h1>
          <div className={styles.timelineContainer}>
            {/* Left Column with two items */}
            <div className={styles.leftColumn}>
              {registerSlides.slice(0, 2).map((register, index) => {
                const IconComponent = iconMap[register.icon];
                return (
                  <div key={index} className={styles.timelineContent}>
                    <div className={styles.iconContainer}>
                      <IconComponent className={styles.svg} size={50} />
                      <h5>{register.title}</h5>
                      <p className={styles.description}>
                        {register.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Line Graph */}
            <div className={styles.lineGraph}>
              <div className={styles.line}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>

            {/* Right Column with one item */}
            <div className={styles.rightColumn}>
              {registerSlides.slice(2).map((register, index) => {
                const IconComponent = iconMap[register.icon];
                return (
                  <div key={index} className={styles.timelineContent}>
                    <div className={styles.iconContainer}>
                      <IconComponent className={styles.svg} size={50} />
                      <h5>{register.title}</h5>
                      <p className={styles.description}>
                        {register.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.sixHeader}>
          <div className={styles.imageContainer}>
            <h1>Stray Saver Network</h1>
            <img
              src="../images/stray-saver-banner.png"
              alt="Zoop Logo"
              className={styles.imageOne}
            />
          </div>
          <div className={styles.textContainer}>
            <h4>one step ahead</h4>
            <h2>How to Register</h2>
            <p>
              Simply fill out our Google Form to register your organization or
              yourself as an individual working for animal welfare.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
    file(relativePath: { eq: "banner-choose.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    allWpPost(limit: 5) {
      # Add the limit parameter here
      nodes {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;

/** @format */

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Values from "../data/values.json";
import Choose from "../data/choose.json";
import "../styles/home.css";
import { FaCheck, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);
  const blogPosts = data.allWpPost.nodes; // Fetch blog posts
  const banners = [
    {
      image: "../images/carousel-banner-1.jpg",
      title: "The World's First Pet Community App!",
      description:
        "Connecting pet loveres,making pet parenthooda breeze, and helping animals in need",
      linkName: "Android App",
      link: "https://play.google.com/store/apps/details?id=com.zoop.zoop",
    },
    {
      image: "../images/carousel-banner-2.jpg",
      title: "for every Paw-sibility",
      description: "More Than Just a Pet App, Zoop is a Thriving Community ",
      linkName: "Ios App",
      link: "https://apps.apple.com/us/app/zoop-pet-community/id6499151889",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <Layout>
      <section className="slider-banner">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="banner-slide">
              <img src={banner.image} alt={banner.title} />
              <div className="banner-content">
                <h3>WELCOME TO ZOOP</h3>
                <h1>{banner.title}</h1>
                <p>{banner.description}</p>
                <Link className="btn-apps" to={banner.link}>
                  {banner.linkName}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="value">
        <div className="values">
          {Values &&
            Values.map((record, index) => (
              <div key={index} className="container">
                <img
                  src={record.image} // Image paths from static folder
                  alt={record.title}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <h2>{record.title}</h2>
                  <p>{record.description}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="header">
        <div>
          <h2>Why Choose Zoop?</h2>
          <p>
            Zoop is more than just an app; it’s a vibrant community of pet
            lovers who share a passion for their furry (or feathery, or scaly!)
            companions. We connect you with fellow pet parents, provide a wealth
            of resources on pet care, and offer ways to get involved in helping
            animals in need.
          </p>
          <div className="choose">
            <ul className="chooseList">
              {Choose.map((value, index) => (
                <li key={index} className="chooseItem">
                  <FaCheck className="chooseIcon" />
                  <span>{value.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <GatsbyImage image={image} alt="Banner" />
      </section>

      <section className="secondHeader">
        <Slider {...settings}>
          <div>
            <div className="carousel-content">
              <div>
                <h2>Welcome to Zoop:</h2>
                <h3>Stray Saver Network!</h3>
                <p>
                  We are inviting NGOs and individuals dedicated to the animal
                  welfare cause to register with us.
                </p>
                <Link className="readMoreLink" to="/contact">
                  Read More
                  <span className="iconCircle">
                    <FaArrowRight className="arrowIcon" />
                  </span>
                </Link>
              </div>
              <img
                src="../images/welcome-banner-1.png"
                alt="Zoop Logo"
                width={700}
                height={700}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div>
            <div className="carousel-content">
              <div>
                <h2>Welcome to Zoop:</h2>
                <h3>Paw Protection Fund!</h3>
                <p>
                  Our goal is to create a vibrant community of pet lovers who
                  are passionate about helping stray animals.
                </p>
                <Link className="readMoreLink" to="/contact">
                  Read More
                  <span className="iconCircle">
                    <FaArrowRight className="arrowIcon" />
                  </span>
                </Link>
              </div>

              <img
                src="../images/welcome-banner-2.png"
                alt="Zoop Logo"
                width={700}
                height={700}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </Slider>
      </section>

      <section className="thirdHeader">
        <img
          src="../images/zoop-magazine.png"
          alt="Zoop Logo"
          width={700}
          height={700}
          style={{ objectFit: "contain" }}
        />
        <div>
          <h2>Issue 001</h2>
          <h3>Welcome to the Second Edition of Zoop Magazine!</h3>
          <p>
            Introducing the special Independence Day edition of Zoop Magazine, a
            heartfelt tribute to the unsung four-legged heroes of the Indian
            Army. In this edition, we honor the courageous dogs who have served
            our nation with unwavering loyalty and bravery. Filled with
            inspiring stories, fascinating insights, and a closer look at these
            extraordinary animals, this issue celebrates their invaluable
            contributions. Download now and join us in spreading the word about
            these true heroes, whose dedication to our country knows no bounds.
          </p>
          <p>
            Join us in making the world a better place for pets. Happy reading!
          </p>
          <Link className="btn" to="/contact">
            Download
          </Link>
        </div>
      </section>

      <section className="review">
        <h1>What Our Users Say About Zoop?</h1>
        <div className="card-grid">
          <div className="card long-card">
            <p>
              As a first-time pet parent, I was overwhelmed with the
              responsibility of caring for my new puppy. The Zoop Pets Community
              app has been a lifesaver! It's full of helpful advice from
              experienced pet owners and professionals. The community is
              supportive and friendly, always ready to answer questions or share
              their experiences. The app is easy to navigate and has a wealth of
              resources on pet care. Highly recommended for all pet parents!
            </p>
            <div className="profile-details">
              <div className="image">
                <img
                  src="../images/zoop-logo-pink.png"
                  alt="Zoop Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="profile-description">
                <h2 className="name">Aswathi</h2>
                <p className="job">A Lifesaver for First-Time Pet Parents</p>
                <div className="star-icon">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card short-card">
            <p>
              The Zoop Pets Community app is an excellent resource for any pet
              owner. It offers a platform to connect with other pet owners,
              share experiences, and get advice. The app also provides useful
              features like reminders for vet appointments and a database of
              pet-friendly places. However, it would be great if the app could
              include more articles on pet health and behavior. Overall, it's a
              great tool for anyone with a furry friend at home!
            </p>
            <div className="profile-details">
              <div className="image">
                <img
                  src="../images/zoop-logo-pink.png"
                  alt="Zoop Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="profile-description">
                <h2 className="name">Laxmi</h2>
                <p className="job">Excellent Resource for Pet Owners</p>
                <div className="star-icon">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card long-card">
            <p>
              I've been using the Zoop Pets Community app for a few months now
              and it's been a great experience. The community is very supportive
              and I've learned a lot from other pet owners. The app itself is
              easy to use and has a lot of useful features. My only suggestion
              would be to add more resources on pet training. But overall, it's
              a great app for pet owners!
            </p>
            <div className="profile-details">
              <div className="image">
                <img
                  src="../images/zoop-logo-pink.png"
                  alt="Zoop Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="profile-description">
                <h2 className="name">Chinu</h2>
                <p className="job">Great App, Great Community</p>
                <div className="star-icon">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card short-card">
            {" "}
            <p>
              The Zoop Pets Community app is a must-have for any pet lover. It's
              more than just an app, it's a community of like-minded pet owners
              who share a common love for their furry friends. The app is
              user-friendly and packed with features that make pet parenting
              easier. From scheduling vet appointments to finding pet-friendly
              parks in your area, this app has it all. Kudos to the team for
              creating such a wonderful platform!
            </p>
            <div className="profile-details">
              <div className="image">
                <img
                  src="../images/zoop-logo-pink.png"
                  alt="Zoop Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="profile-description">
                <h2 className="name">Siri</h2>
                <p className="job">A Must-Have for Pet Lovers</p>
                <div className="star-icon">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <Link
              to={`/zoop-daily/${post.slug}`}
              key={index}
              className="blog-post">
              <GatsbyImage
                className="gatsby-image-wrapper"
                image={getImage(post.featuredImage.node.localFile)}
                alt={post.title}
              />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.date} - Zoop</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
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

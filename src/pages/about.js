/** @format */

import React, { useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css";
import { MdOutlinePets, MdKeyboardArrowDown } from "react-icons/md";
import {
  FaDog,
  FaPeopleArrows,
  FaHandHoldingHeart,
  FaQuoteLeft,
} from "react-icons/fa";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      question: "What is Negoteq?",
      answer:
        "Negoteq is a pioneering company in the pet tech industry, dedicated to leveraging cutting-edge technology to enhance the lives of pets and their owners.",
    },
    {
      question: "What products does Negoteq offer?",
      answer:
        "Negoteq offers a wide range of innovative pet tech products designed to meet the evolving needs of the pet community.",
    },
    {
      question: "What is Zoop?",
      answer:
        "Zoop is a product of Negoteq and the world’s first pet community app, tailored for all pet enthusiasts. It features an interactive feed with filters for Healthcare, Adoption, and Rescue, and fosters a global pet community.",
    },
    {
      question: "What unique features does Zoop have?",
      answer:
        "Zoop includes interactive community elements like Zoop Walk, which encourages pet parents to participate in challenges that support feeding and sheltering stray dogs. It also has the Stray Saver Network, connecting NGOs and animal welfare professionals to aid stray animals, and the Paw Protection Fund to secure essential funding for rescue efforts.",
    },
    {
      question: "How can I get involved with Zoop?",
      answer:
        "You can join the Zoop community by downloading the app on your Android or iOS device. By participating in community challenges and supporting initiatives like the Stray Saver Network, you can make a positive impact on the lives of pets worldwide.",
    },
    {
      question: "How does Zoop support stray animals?",
      answer:
        "Through the Stray Saver Network and the Paw Protection Fund, Zoop connects NGOs and animal welfare professionals to secure funding and expand their rescue operations, assisting more stray animals in need.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <section className={styles.about}>
          <div className={styles.banner}>
            <h2>About Us</h2>
            <div className={styles.imageContainer}>
              <img
                src="../images/banner-about.jpg"
                alt="Zoop Logo"
                style={{ objectFit: "contain" }}
                className={styles.curvedImage}
              />
            </div>
          </div>
        </section>
        <div className={styles.aboutContent}>
          <section className={styles.aboutCompany}>
            <div className={styles.gridImage}>
              <div className={styles.column}>
                <img
                  src="../images/about/pic3-about.jpg"
                  alt="Image 3"
                  className={styles.image3}
                />

                <img
                  src="../images/about/pic2-about.jpg"
                  alt="Image 2"
                  className={styles.image2}
                />
              </div>
              <div className={styles.column}>
                <img
                  src="../images/about/pic1-about.jpg"
                  alt="Image 1"
                  className={styles.image1}
                />
                <img
                  src="../images/about/pic4-about.jpg"
                  alt="Image 4"
                  className={styles.image4}
                />
              </div>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutDesc}>
                <h5>About Company</h5>
                <h2>Negoteq : Pet Tech Company</h2>
                <p>
                  Welcome to Negoteq, a pioneering force in the pet tech
                  industry. At Negoteq, we are dedicated to leveraging
                  cutting-edge technology to enhance the lives of pets and their
                  owners. Our innovative approach encompasses a wide range of
                  pet tech products designed to meet the evolving needs of the
                  pet community.
                </p>
              </div>
              <div className={styles.features}>
                <div className={styles.featureContent}>
                  <MdOutlinePets></MdOutlinePets>
                  <h4>Innovative Pet Tech</h4>
                  <p>
                    At the forefront of technological advancements, Negoteq
                    develops cutting-edge products designed to improve the lives
                    of pets and their owners, setting new standards in the pet
                    tech industry.
                  </p>
                </div>
                <div className={styles.featureContent}>
                  <FaDog></FaDog>
                  <h4>Zoop App</h4>
                  <p>
                    A flagship product of Negoteq, Zoop is the world’s first pet
                    community app, offering a comprehensive platform for pet
                    healthcare, adoption, and rescue, while fostering a global
                    community of pet enthusiasts.
                  </p>
                </div>
                <div className={styles.featureContent}>
                  <FaPeopleArrows></FaPeopleArrows>
                  <h4>Community Engagement</h4>
                  <p>
                    Through initiatives like Zoop Walk and the Stray Saver
                    Network, Negoteq encourages active participation in
                    community challenges and connects individuals and
                    organizations dedicated to animal welfare.
                  </p>
                </div>
                <div className={styles.featureContent}>
                  <FaHandHoldingHeart></FaHandHoldingHeart>
                  <h4>Zoop Care</h4>
                  <p>
                    This initiative allows NGOs and animal welfare professionals
                    to secure crucial funding, enhancing their capacity to
                    rescue and support stray animals, demonstrating Negoteq’s
                    commitment to making a positive impact on animal welfare.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.team}>
            <div className={styles.quotes}>
              <FaQuoteLeft></FaQuoteLeft>
              <h4>
                Pets bring joy and companionship to our lives. By building a
                strong community around them,we ensure they receive the love and
                care they deserve
              </h4>
              <p className={styles.title}>Negoteq Team</p>
            </div>
            <div className={styles.aboutUs}>
              <h3>About Us</h3>
              <p>
                We are proud to introduce Zoop, a product of Negoteq and the
                world’s first pet community app tailored for all pet
                enthusiasts. Zoop offers an interactive feed with specialized
                filters for Healthcare, Adoption, and Rescue, fostering a
                unified global pet community. Beyond a traditional social
                networking platform, Zoop features interactive community
                elements like Zoop Walk, motivating pet parents to participate
                in community challenges that support feeding and sheltering
                stray dogs across the nation.
              </p>
              <p>
                Additionally, Zoop’s Stray Saver Network connects NGOs, animal
                welfare professionals, and individuals committed to aiding stray
                animals. Through our Paw Protection Fund, these partners can
                secure essential funding to expand their rescue operations and
                assist more stray animals in need.
              </p>
              <p>
                We are excited to announce that Zoop is now available on both
                Android and iOS platforms. Join Zoop today and become part of a
                community dedicated to making a positive impact on the lives of
                pets worldwide. Download the app and start making a difference
                today!
              </p>
            </div>
            <div className={styles.aboutUs}>
              <h3>Our Pro Team</h3>
              <p>
                At Negoteq, our innovative strides in pet tech are powered by a
                talented and dedicated team. From visionary leaders and creative
                designers to tech-savvy engineers and compassionate animal
                welfare advocates, our team brings unique skills and a shared
                passion for enhancing the lives of pets and their owners.
              </p>
              <p>
                Their collective efforts have made Zoop, the world’s first pet
                community app, a reality, and continue to drive Negoteq forward.
                We are proud to work with such an amazing group of individuals
                committed to making a positive impact on the pet community.
              </p>
            </div>
            <div className={styles.gridTeam}>
              <div>
                <img src="../images/about/team-pict1-about.png" alt="Image 3" />
                <h4>Puvala vijayakumar Gnaneshwar ~ Nani ~</h4>
                <p>Founder & CEO</p>
              </div>
              <div>
                <img src="../images/about/team-pict2-about.png" alt="Image 3" />
                <h4>Sirapop Nuannimnoi ~ Film ~</h4>
                <p>Co-Founder</p>
              </div>
              <div>
                <img src="../images/about/team-pict3-about.png" alt="Image 3" />
                <h4>Suryakanta Das ~ Surya~</h4>
                <p>Co-Founder</p>
              </div>
            </div>
            <div className={styles.gridTeam}>
              <div>
                <img src="../images/about/team-pict4-about.png" alt="Image 3" />
                <h4>Sofya</h4>
                <p>Intern</p>
              </div>
              <div>
                <img src="../images/about/team-pict5-about.png" alt="Image 3" />
                <h4>Disha</h4>
                <p>Intern</p>
              </div>
              <div>
                <img src="../images/about/team-pict6-about.png" alt="Image 3" />
                <h4>Arjun</h4>
                <p>Intern</p>
              </div>
              <div>
                <img src="../images/about/team-pict7-about.jpg" alt="Image 3" />
                <h4>Tianna Mays</h4>
                <p>Intern</p>
              </div>
            </div>
          </section>

          <section className={styles.frequently}>
            <h3>Frequently Asked Questions</h3>
            <div className={styles.content}>
              <img src="../images/banner-choose.png" alt="Image 3" />
              <div className={styles.faqList}>
                {questions.map((item, index) => (
                  <div key={index} className={styles.faqItem}>
                    <div
                      className={`${styles.faqQuestion} ${
                        openIndex === index ? styles.active : ""
                      }`}
                      onClick={() => handleToggle(index)}>
                      <p>{item.question}</p>
                      <MdKeyboardArrowDown></MdKeyboardArrowDown>
                    </div>
                    {openIndex === index && (
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;

/** @format */

import React, { useState } from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePets, MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = [
    {
      question: "What is Zoop",
      answer:
        "Zoop is the world's first pet community app designed to connect pet lovers, provide pet care resources, and help animals in need.",
    },
    {
      question: "What kind of pets can i connect with on Zoop?",
      answer:
        "Download the Zoop app from the App Store or Google Play and follow the on-screen instructions to create your free account.",
    },
    {
      question: "What kind of pets can i connect with on Zoop?",
      answer:
        "Zoop welcomes pet lovers of all kinds, from dog and cat owners to bird enthusiasts and reptile aficionados.",
    },
    {
      question: "How can in help animals in need through Zoop?",
      answer:
        "Zoop features a dedicated adoption and rescue section where you can browse adoptable pets and connect with shelters and rescues. You can also donate to the Paw Production Fund, which supports stray animals.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Layout>
      <section className={styles.contact}>
        <div className={styles.banner}>
          <div className={styles.title}>
            <h2>Contact</h2>
            <p>Home / Contact</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="../images/banner-contact.jpg"
              alt="Zoop Logo"
              style={{ objectFit: "cover" }}
              className={styles.curvedImage}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.desc}>
          <h1>Get In Touch With Us</h1>
          <p>
            Don’t forget to download the latest version of the Zoop app to stay
            up-to-date on all the fun!
          </p>
          <p>We can’t wait to see you and your pet in the Zoop community!</p>
          <p>Happy Pawsitives,</p>
          <h3>The Zoop Team</h3>
        </div>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <div className={styles.infoIcon}>
              <FaPhoneAlt></FaPhoneAlt>
            </div>
            <h1>Office Phone Number</h1>
            <p>+91 72007 00369</p>
          </div>
          <div className={styles.infoContent}>
            <div className={styles.infoIcon}>
              <FaLocationDot></FaLocationDot>
            </div>
            <h1>Company Ofice Address</h1>
            <p>Bengaluru, India</p>
          </div>
          <div className={styles.infoContent}>
            <div className={styles.infoIcon}>
              <IoMdMail></IoMdMail>
            </div>
            <h1>Office Email Address</h1>
            <p>contact@zooppets.in</p>
          </div>
        </div>
      </section>

      <section className={styles.contactForm}>
        <div className={styles.banner}>
          <div className={styles.formBox}>
            <h2>Write Us</h2>
            <p>
              As a passionate explorer of the intersection between technology,
              art, and the natural world, I’ve embarked on a journey to unravel
              the fascinating connections that weave.
            </p>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Name" />
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
              <label>Messages</label>
              <textarea placeholder=" Message"></textarea>
              <button type="submit">Send</button>
            </form>
            <p>
              As a passionate explorer of the intersection between technology,
              art, and the natural world, I’ve{" "}
              <span className={styles.strong}>
                embarked on a journey to unravel{" "}
              </span>
              the fascinating connections that weave.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="../images/banner-contact-form.jpg"
              alt="Zoop Logo"
              style={{ objectFit: "cover" }}
              className={styles.curvedImage}
            />
          </div>
        </div>
      </section>
      <section className={styles.frequently}>
        <div className={styles.faq}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {questions.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => handleToggle(index)}>
                  <p>{item.question}</p>
                  <TiArrowSortedDown></TiArrowSortedDown>
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
    </Layout>
  );
};

export default Contact;

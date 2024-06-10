/** @format */

import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css";

const Contact = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <h2>Contact Us</h2>
        <h2>Get in Touch with Zoop</h2>
        <br />
      </section>
      <section className={styles.story}>
        <div>
          <h3>Contact Us for Any Inquiries</h3>
          <h4>Reach out to us for questions, collaborations, or feedback.</h4>
          <p>P: 7200700369</p>
          <p>E: contact@zooppets.in</p>
        </div>

        <div className={styles.contactForm}>
          <p>SAY HI!</p>
          <h3>Send Us Your Queries and Feedback Here</h3>
          <form method="post">
            <input type="text" placeholder="Your Name"></input>
            <input type="text" placeholder="Your Email"></input>
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button>SEND</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

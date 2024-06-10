import React from 'react'
import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css"


const About = () => {
  return (
    <Layout>
      <section className={styles.about}>
      <h2>About Us</h2>
        <h2>Meet Zoop: The Pet Lover’s Paradise</h2>
        <br />
        <p>At Zoop, we are dedicated to creating a community where the love for pets unites us all. Join us in celebrating the joys of pet ownership and connecting with like-minded enthusiasts.
        Our platform serves a diverse range of clients, from individual pet owners seeking advice and support to professionals looking to share their expertise and passion for animals.</p>
      </section>
      <section className={styles.story}>
        <div>
        <h4>OUR STORY</h4>
        <h3>A Community Celebrating the Bond Between Pets and Humans</h3>
        </div>
        <div>  
              <div>
                <h2>At Zoop, we are dedicated to creating a community where the love for pets unites us all. Join us in celebrating the joys of pet ownership and connecting with like-minded enthusiasts.</h2>
                <p>Our platform serves a diverse range of clients, from individual pet owners seeking advice and support to professionals looking to share their expertise and passion for animals.</p>
               
              </div>
          </div>
      </section>
      
      </Layout>
  );
}
 
export default About
import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from '../styles/cta.module.css'
import * as home from '../styles/home.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '../styles/global.css'





export default function Cta() {

     const data = useStaticQuery(graphql`
    query Footer {
  file(relativePath: {eq: "footer.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`)
    
    console.log(data)
    const image = getImage(data.file.childImageSharp.gatsbyImageData)


    return (
      <div className={styles.cta}>
       
          <GatsbyImage image={image} alt="Banner" />
        
        <div className={styles.content}>
            <h4>CONNECT WITH US</h4>
            <h2>Join Zoop Today and Embrace the Pet-Lover Community</h2>
        <Link className={home.btn} to="/contact">Join Now</Link>
        </div>
        </div>
    )
}


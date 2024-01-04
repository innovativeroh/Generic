import React from 'react'
import styles from './about.module.css';
import Slider from '@/app/components/engine/slider';
const About = () => {
  return (
    <div className={styles.aboutArea}>
        <div id="wrapper">
            <div id={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <h1 id={styles.mainTitle}>ABOUT</h1>
                    <h1 id={styles.mainTitlePost}>ABOUT</h1>
                </div>
                <br></br>
                        <div className={styles.aboutFlexContainer}>
                        <div id={styles.aboutCont} style={{flex: 1}}>
                            <p>In today&#x27;s digital landscape, a strong online presence is no longer optional, it&#x27;s essential. At Generic Org., we&#x27;re more than just designers and marketers; we&#x27;re architects of success. We understand that each brand has a unique story to tell, and we&#x27;re passionate about crafting the perfect digital platform to amplify your voice.</p>
                        </div>
                        <div style={{flex: 2}}>
                            <Slider />                   
                        </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default About
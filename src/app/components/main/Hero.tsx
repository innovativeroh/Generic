import React from 'react'
import styles from './hero.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  return (
    <main className={styles.HeroContainer}>
      <div className={styles.OverlayHero}>
      <div id="wrapper">
      <div className={styles.Container}>
        <div id={styles.heroFlex} style={{flex: 1}}>
          <div id={styles.preSpan}></div><span>Agency</span>
          <h1>Welcome To Generic</h1>
          <p id={styles.subTitle}>More than pixels and prose, We are growth partners. We tailor websites, design, and content that resonate, then amplify your message with expert digital marketing. Watch your brand soar.</p>
          <button id={styles.GetStarted}><div className={styles.iconPadding}><ArrowForwardIosIcon id={styles.Icon} /></div><p>Get Started</p></button>
        </div>
        <div style={{flex: '1'}}>
          <div className={styles.dockerHero}>
            <InstagramIcon />
            <GitHubIcon />
            <FacebookIcon />
            <TwitterIcon />
            <CallIcon />
            <EmailIcon />
          </div>
        </div>
      </div>
      </div>
      </div>
    </main>
  )
}

export default Hero
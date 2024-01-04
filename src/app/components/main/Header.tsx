import React from 'react'
import Styles from './header.module.css';
import Link from 'next/link'

const Header = () => {
  return (
    <div className={Styles.HeaderModule}>
        <div id='wrapper'>
            <div id={Styles.HeaderArea}>
            <div className={Styles.Logos}>
                <p id={Styles.LogoText}>Generic <span>Org.</span></p>
            </div>
            <nav>
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Contact</Link>
            </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
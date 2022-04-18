import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link href={"/"}>
          <a>
            <Image src={logo} className={styles.logo} width={200} height={55} alt="Lottie Logo"/>
          </a>
        </Link>
    </div>
  )
}

export default Navbar
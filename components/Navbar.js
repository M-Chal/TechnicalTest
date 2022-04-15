import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link href={"/"}>
          <a>
            <Image src={"/../public/logo.png"} className={styles.logo} width={200} height={55}/>
          </a>
        </Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import Link from 'next/link'

import styles from "../styles/Sidebar.module.css"
import {useRouter} from 'next/router';

function Sidebar() {
    const router = useRouter()
    return (
        <div className={styles.SideBar}>
            <Link href={"/"}>
                <a className={router.pathname == "/" ? styles.activeButton : styles.button}>Form</a>
            </Link>
            <Link href={"/emails"}>
                <a className={router.pathname == "/emails" ? styles.activeButton : styles.button}>Email</a>
            </Link>
            <Link href={"/messages"}>
                <a className={router.pathname == "/messages" ? styles.activeButton : styles.button}>Messages</a>
            </Link>
            <Link href={"/phone"}>
                <a className={router.pathname == "/phone" ? styles.activeButton : styles.button}>Phone</a>
            </Link>
        </div>
    )
}

export default Sidebar
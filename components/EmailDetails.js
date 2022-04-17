import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import styles from '../styles/EmailDetails.module.css'

function EmailDetails({email, closeEmail}) {
  return (
    <>
        <div className={styles.email}>
            <p className={styles.from}>From: <span className={styles.lightText}>{email.from[0].email}</span></p>
            <p className={styles.from}>Subject: <span className={styles.lightText}>{email.subject}</span></p>
            <p className={styles.from}>Body:</p>
            <div className={styles.emailBody}>
                <p>{ReactHtmlParser(email.body)}</p>
            </div>
            <div className={styles.close} onClick={closeEmail}>X</div>
        </div>
        <div className={styles.background} onClick={closeEmail}></div>
    </>
  )
}

export default EmailDetails
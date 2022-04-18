import React from 'react'
import styles from '../styles/EmailDetails.module.css'

function MessageDetails({message, close}) {
  return (
    <>
        <div className={styles.email}>
            <p className={styles.from}>From: <span className={styles.lightText}>{message.fName} ({message.email})</span></p>
            <p className={styles.from}>Type Of Care: <span className={styles.lightText}>{message.toc}</span></p>
            <p className={styles.from}>Location: <span className={styles.lightText}>{message.location}</span></p>
            <p className={styles.from}>Comments:</p>
            <div className={styles.emailBody}>
                <p>{message.comments}</p>
            </div>
            <div className={styles.close} onClick={close}>X</div>
        </div>
        <div className={styles.background} onClick={close}></div>
    </>
  )
}

export default MessageDetails
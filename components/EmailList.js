import React from 'react'
import styles from '../styles/Email.module.css'
import {useState, useEffect} from 'react'

function EmailList({emails}) {

    return (
        <div className={styles.container}>
            {emails.map(email => (
                <div>
                    <p>{email.subject}</p>
                </div>
            ))}
        </div>
    )
}

export default EmailList
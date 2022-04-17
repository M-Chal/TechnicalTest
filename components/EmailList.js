import React from 'react'
import styles from '../styles/Email.module.css'
import EmailDetails from './EmailDetails'
import {useState} from 'react'

function EmailList({emails}) {
    const [emailDetail, setEmailDetail] = useState("")

    function showEmail(email){
        setEmailDetail(email)
    }

    function closeEmail(){
        setEmailDetail("")
    }

    return (
        <div className={styles.container}>
            {emails.map(email => (
                <div key={email.id} className={[styles.emailBody, email.unread ? styles.unread : styles.read].join(" ")} onClick={() => showEmail(email)}>
                    <p className={styles.emailFrom}>{email.from[0].email}</p>
                    <p className={styles.emailSubject}>Subject: {email.subject} - <span className={styles.emailSnippet}>{email.snippet}</span></p>
                </div>
            ))}
            <p>Send emails to email@websitefortestingstuff.com</p>
            {emailDetail ? <EmailDetails email={emailDetail} closeEmail={closeEmail}/> : null}
        </div>
    )
}

export default EmailList
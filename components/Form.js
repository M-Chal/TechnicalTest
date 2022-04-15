import React from 'react'

import styles from '../styles/Form.module.css'

import {db} from '../firebase/firebase'
import { collection, addDoc } from "firebase/firestore"; 

async function sendForm(){
    try {
        const docRef = await addDoc(collection(db, "formData"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } 
    catch (e) {
        console.error("Error adding document: ", e);
    }
}

function Form() {
  return (
    <div className={styles.container}>
        <h2>Form</h2>
        <form className={styles.form}>
            <div className={styles.row}>
                <div className={styles.labels}>
                    <label className={styles.label} htmlFor="name">Full Name</label>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <label className={styles.label} htmlFor="toc">Type of Care</label>
                    <label className={styles.label} htmlFor="location">Location</label>
                    <label className={styles.commentLabel} htmlFor="comments">Comments</label>
                </div>
                <div className={styles.inputs}>
                    <input className={styles.input} id="name" type="text" required/>
                    <input className={styles.input} id="email" type="text" required/>
                    <input className={styles.input} id="toc" type="text" required/>
                    <input className={styles.input} id="location" type="text" required/>
                    <textarea className={styles.comments} id="comments" type="text" rows={3} maxLength={150} required/>
                </div>
            </div>
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
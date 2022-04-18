import React from 'react'
import {useState} from 'react'
import { Toaster, toast } from 'react-hot-toast'
import styles from '../styles/Form.module.css'

function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [toc, setTOC] = useState("")
    const [location, setLocation] = useState("")
    const [comments, setComments] = useState("")

    const sendForm = async (e) => {
        e.preventDefault()
        const form = {
            name,
            email,
            toc,
            location,
            comments
        }
        const response = await fetch("/api/sendForm",{
            method:"POST",
            headers:{
                "Accept": "applications/json",
                "Content-Type": "applications/json",
            },
            body: JSON.stringify(form)
        })
        const content = await response.json();
        
        toast.success('Form Submitted :)')
        // Clearing the text fields
        setName("")
        setEmail("")
        setTOC("")
        setLocation("")
        setComments("")
    }

    return (
        <div className={styles.container}>
            <h2>Form</h2>
            <div><Toaster/></div>
            <form className={styles.form} onSubmit={sendForm}>
                <div className={styles.row}>
                    <div className={styles.labels}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <label className={styles.label} htmlFor="toc">Type of Care</label>
                        <label className={styles.label} htmlFor="location">Location</label>
                        <label className={styles.commentLabel} htmlFor="comments">Comments</label>
                    </div>
                    <div className={styles.inputs}>
                        <input className={styles.input} value={name} onChange={e => setName(e.target.value)} id="name" type="text" required/>
                        <input className={styles.input} value={email} onChange={e => setEmail(e.target.value)} id="email" type="text" required/>
                        <input className={styles.input} value={toc} onChange={e => setTOC(e.target.value)} id="toc" type="text" required/>
                        <input className={styles.input} value={location} onChange={e => setLocation(e.target.value)} id="location" type="text" required/>
                        <textarea className={styles.comments} value={comments} onChange={e => setComments(e.target.value)} id="comments" type="text" rows={3} maxLength={150} required/>
                    </div>
                </div>
                <button className={styles.submit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
import React from 'react'
import styles from '../styles/Messages.module.css'
import {useState} from 'react'
import MessageDetails from './MessageDetails'

function Messages({messages}) {

    const [messageDetail, setMessageDetail] = useState("")

    async function openMessage(message){
        setMessageDetail(message)
        if(message.read === false){
            const response = await fetch("/api/readForm",{
                method:"POST",
                headers:{
                    "Accept": "applications/json",
                    "Content-Type": "applications/json",
                },
                body: message.id
            })
        }
    }

    function closeMessage(){
        setMessageDetail("")
    }

  return (
    <div className={styles.container}>
        {messages.map(message => (
            <div className={[styles.messageBody, message.read ? styles.read : styles.unread].join(" ")} key={message.id} onClick={() => openMessage(message)}>
                <p className={styles.name}>{message.fName}</p>
                <p className={styles.email}>({message.email})</p>
                <p className={styles.toc}>Care: {message.toc}</p>
                <p className={styles.location}>{message.location}</p>
                <p className={styles.comments}>Comments: {message.comments}</p>
            </div>
        ))}
        {messageDetail ? <MessageDetails message={messageDetail} close={closeMessage}/> : null}
    </div>
  )
}

export default Messages
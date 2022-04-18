import React from 'react'
import Sidebar from '../components/Sidebar'
import Messages from '../components/Messages';
import {db} from '../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore/lite';
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  // Loading up the Firebase collection called "formData"
  // in order to view all the form submissions
  const col = collection(db, 'formData');
  const formSnapshot = await getDocs(col);

  const formList = formSnapshot.docs.map(doc => {
    // Getting the data along with the id which is the document name
    // important for referencing said form when we want to change it's read status for example
    const data = doc.data();
    const id = doc.id;
    return {id, ...data}
  });
  
  return {
      props: {messages: formList} 
  }
}

function messages({messages}) {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Messages messages={messages}/>
    </main>
  )
}

export default messages
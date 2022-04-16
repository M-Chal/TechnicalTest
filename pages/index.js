import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Sidebar from '../components/Sidebar'
import Form from '../components/Form'

import {db} from '../firebase/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

async function getCities(db) {
  const col = collection(db, 'formData');
  const formSnapshot = await getDocs(col);
  const formList = formSnapshot.docs.map(doc => doc.data());
  return formList;
}

export default function Home() {
  console.log(getCities(db))

  return (
    <div className={styles.container}>
      <Head>
        <title>Lottie Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Sidebar />
        <Form />
      </main>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Sidebar from '../components/Sidebar'
import Form from '../components/Form'

export default function Home() {

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

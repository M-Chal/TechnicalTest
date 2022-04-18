import React from 'react'
import styles from '../styles/Home.module.css'

import Sidebar from '../components/Sidebar'
import PhoneLog from '../components/PhoneLog'

export const getStaticProps = async () => {
  const response = await fetch("https://websitefortestingstuff.com/api/calls",{
    method:"GET",
    headers:{
      "Content-Type": "applications/json",
    },
  })
  const data = await response.json()
  return {
    props: {log: data},
    revalidate: 1,
  }
}

function phone({log}) {
  return (
    <div className={styles.main}>
      <Sidebar />
      <PhoneLog log={log}/>
    </div>
  )
}

export default phone
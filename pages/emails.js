import React from 'react'
import Sidebar from '../components/Sidebar'
import EmailList from '../components/EmailList'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const response = await fetch("https://api.nylas.com/messages?limit=10",{
      method:"GET",
      headers:{
          "Authorization": "siCkFzxwA9Dwy89zpv1lDxoIRS8h8D"
      }
  })
  const data = await response.json()

  return {
      props: {emailList: data} 
  }
}

function emails({emailList}) {
  return (
    <main className={styles.main}>
      <Sidebar />
      <EmailList emails={emailList}/>
    </main>
  )
}

export default emails
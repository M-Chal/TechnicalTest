import React from 'react'
import styles from '../styles/Home.module.css'

import Sidebar from '../components/Sidebar'
import PhoneLog from '../components/PhoneLog'

// export const getStaticProps = async () => {
//   // For some reason using the usual "/api/getCallLog" didn't work here
//   // So I had to add the full path, We'll see if it works once deployed
//   const response = await fetch("/api/calls",{
//     method:"GET",
//     headers:{
//         "Content-Type": "applications/json",
//     },
//   })
//   const data = await response.json()
//   return {
//     props: {log: data} 
//   }
// }

function phone({log}) {
  return (
    <div className={styles.main}>
      <Sidebar />
      {/* <PhoneLog log={log}/> */}
    </div>
  )
}

export default phone
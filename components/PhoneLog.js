import React from 'react'
import styles from '../styles/Phone.module.css'

function PhoneLog({log}) {
    console.log(log)
  return (
    <div className={styles.container}>
        {log.callList.map(call => (
            <div key={call.sid} className={styles.logBody}>
                <div className={styles.phone}>
                    <p className={styles.phoneDir}>{call.direction}</p>
                    <p className={styles.phoneNum}>{call.from}</p>
                </div>
                <div className={styles.time}>
                    <p>{call.startTime.slice(11,16)}</p>
                </div>
            </div>
        ))}
        <p>For your phone log to come up, call: +19853045439</p>
    </div>
  )
}

export default PhoneLog
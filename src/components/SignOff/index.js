import UserIcon from '@/Icons/UserIcon'
import React from 'react'
import styles from './SignOff.module.scss'

const SignOff = ({ setShowSignOff }) => {

  return (
    <div className={styles.signOffContainer} onMouseEnter={() => setShowSignOff(true)}
      onMouseLeave={() => setShowSignOff(false)}>
      <div className={styles.signOffInnerContainer}>
        <div className={styles.signOffGreetingContainer}>
          <div className={styles.signOffIconContainer}>
            <UserIcon />
          </div>
          <div className={styles.signOffGreetingText} title={''}>
            <span className={styles.signOffGreetingHighlight}>¡</span>
            <span className={styles.signOffGreetingName}>Hola Jeferson</span>
            <span className={styles.signOffGreetingHighlight}>!</span>
          </div>
        </div>
        <div className={styles.signOffDivider}></div>
        <div className={styles.signOffInfoContainer}>
          <div className={styles.signOffNameContainer}>
            <div className={styles.signOffName}>{''}</div>
          </div>
          <div className={styles.signOffEmailContainer}>
            <div className={styles.signOffEmail}>{''}</div>
          </div>
        </div>
      </div>
      <div className={styles.signOffButtonContainer}>
        <div className={styles.signOffButton}>
          <div className={styles.signOffButtonText}>Cerrar Sesión</div>
        </div>
      </div>
    </div>
  )
}

export default SignOff

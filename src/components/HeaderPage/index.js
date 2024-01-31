import React from 'react'
import ChevronLeft from '@/Icons/ChevronLeft'
import styles from './HeaderPage.module.scss'
import BarChart from '@/Icons/BarChart'
import BellRing from '@/Icons/BellRing'


const HeaderPage = ({ title, IconTitle }) => {
    return (
        <div className={styles.containerHeaderPage}>
            <div className={styles.subcontainerTitleHeaderpage}>
                <ChevronLeft />
                <div className={styles.headerPageContainer}>
                    <div className={styles.headerPageText}>{title}</div>
                    <div className={styles.headerPageIconContainer}>
                       {IconTitle}
                    </div>
                </div>
            </div>
            <div className={styles.subContainerUser}>
                <div className={styles.container}>
                    <div style={{width: '30%', cursor: 'pointer'}}>
                        <BellRing />
                    </div>
                    <div className={styles.containerUser}>
                        <span className={styles.greeting}>¡Hola Jeferson!</span>
                        <span className={styles.emoji}>👋🏼</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPage

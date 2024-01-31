import ArrowLeft from '@/Icons/ArrowLeft';
import ArrowRight from '@/Icons/ArrowRight';
import React from 'react'
import styles from './HeaderCalendar.module.scss'

const HeaderCalendar = ({ title, handlePrev, handleNext }) => {
    console.log("title", title);
    let parts = title?.split(" ");

    return (
        <div className={styles.headerCalendarContainer}>
            {parts && (
                <>
                    <div className={styles.headerCalendarTextContainer}>
                        <div className={styles.headerCalendarMonth}>{parts[0].charAt(0).toUpperCase() + parts[0].slice(1)}</div>
                        <div className={styles.headerCalendarYear}>{parts[2]}</div>
                    </div>
                    <div className={styles.headerCalendarIconContainer}>
                        <ArrowLeft width={37} height={37} onClick={handlePrev} style={{cursor: 'pointer'}}/>
                        <ArrowRight width={37} height={37} onClick={handleNext} style={{ cursor: 'pointer' }} />
                    </div>
                </>
            )}
        </div>
    );
}

export default HeaderCalendar

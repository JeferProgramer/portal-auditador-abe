import InfoRed from '@/Icons/InfoRed';
import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './AlertReturned.module.scss'
import LayoutAll from '@/Icons/LayoutAll';

const AlertReturned = ({ variant = 1, title = 'Rechazado', component: Component = InfoRed }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cx = classNames({
        [styles.tooltipRefused1]: variant === 1,
        [styles.tooltipRefused2]: variant === 2,
    });

    console.log("IsHovered", isHovered);

    return (
        <div  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
            <Component style={{ cursor: 'pointer' }} />
            {isHovered && (
                <div className={cx}>
                    <div className={styles.innerDiv}>
                        <div className={styles.text}>{title}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AlertReturned

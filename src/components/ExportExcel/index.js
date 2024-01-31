import FileDownload from '@/Icons/FileDownload';
import React, { useState } from 'react'
import styles from '../SideBarRight/SideBarRight.module.scss';

const ExportExcel = () => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    return (
        <div className={styles.sidebarRightSubitemInner}>
            <div
                className={styles.sidebarRightIconContainer}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
            >
                <FileDownload />
            </div>
            {isTooltipVisible && (
                <div className={styles.tooltip}>
                    <div className={styles.tooltipContent}>
                        <div className={styles.tooltipText}>Exportar Excel</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExportExcel

import FileDownload from '@/Icons/FileDownload';
import HelpCircle from '@/Icons/HelpCircle';
import { useState } from 'react';
import ExportExcel from '../ExportExcel';
import SignOff from '../SignOff';
import styles from './SideBarRight.module.scss';

const SidebarRight = ({ exportExcel }) => {
    const [showSignOff, setShowSignOff] = useState(false);

    return (
        <div className={styles.sidebarRightContainer}>
            <div className={styles.sidebarRightItem}>
                <div
                    className={styles.sidebarRightImageContainer}
                    onMouseEnter={() => setShowSignOff(true)}
                    onMouseLeave={() => setShowSignOff(false)}
                >
                    <img className={styles.sidebarRightImage} src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    {showSignOff && <SignOff setShowSignOff={setShowSignOff} />}
                </div>
                {exportExcel && (
                    <div className={styles.sidebarRightSubitem}>
                        <ExportExcel />
                    </div>
                )}
            </div>
            <div className={styles.sidebarRightPadding}>
                <div className={styles.sidebarRightIconContainer2}>
                    <HelpCircle />
                </div>
            </div>
        </div>
    );
};

export default SidebarRight;

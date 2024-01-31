import styles from './SideBarLayout.module.scss';
import React from 'react';
import HeaderPage from '@/components/HeaderPage';
import SideBarRight from '@/components/SideBarRight';
import BasicLayout from '../BasicLayout';

const SideBarLayout = ({ children, exportExcel, title, IconTitle }) => {
    return (
        <BasicLayout pageTitle={'Solicitudes de Información'}>
            <div className={styles.layoutContainer}>
                <div className={styles.contentContainer}>
                    <HeaderPage title={title} IconTitle={IconTitle} />
                    {children}
                </div>
                <SideBarRight exportExcel={exportExcel} />
            </div>
        </BasicLayout>
    );
};

export default SideBarLayout;

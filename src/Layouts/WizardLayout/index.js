import CheckCircle from '@/Icons/CheckCircle';
import ChevronRight from '@/Icons/ChevronRight';
import Layers from '@/Icons/Layers';
import Users from '@/Icons/Users';
import React from 'react'
import styles from '../../components/Wizard/Wizard.module.scss'

const WizardLayout = ({ children, currentStep }) => {
    return (
        <div className={styles.containerWizard}>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.stepIcon}>
                        <CheckCircle stroke={currentStep >= 0 ? '#A6D04F' : '#C7C7C7'} />
                    </div>
                    <div className={currentStep >= 0 ? styles.stepTitle : styles.stepTitleDesactivate}>
                        1. Información Principal
                    </div>
                </div>

                <div className={styles.divider}>
                    <ChevronRight />
                </div>

                <div className={styles.step}>
                    <div className={styles.stepIcon}>
                        <Layers stroke={currentStep >= 1 ? '#A6D04F' : '#C7C7C7'} />
                    </div>
                    <div className={currentStep >= 1 ? styles.stepTitle : styles.stepTitleDesactivate}>
                        2. Archivos Solicitados
                    </div>
                </div>

                <div className={styles.divider}>
                    <ChevronRight />
                </div>

                <div className={styles.step}>
                    <div className={styles.stepIcon}>
                        <Users stroke={currentStep >= 2 ? '#A6D04F' : '#C7C7C7'} />
                    </div>
                    <div className={currentStep >= 2 ? styles.stepTitle : styles.stepTitleDesactivate}>
                        3. Asignación
                    </div>
                </div>
            </div>

            <div className={styles.form}>
                {children}
            </div>
        </div>
    );
};

export default WizardLayout;

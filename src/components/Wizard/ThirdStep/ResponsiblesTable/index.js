import { CheckBoxOutlined, RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import React from 'react'
import styles from '../ThirdStep.module.scss'

const ResponsiblesTable = ({ responsibleUsers, type = 'single', onCheckboxClick, responsibleId = null }) => {
    return (
        <div className={styles.thirdStepContent}>
            <div className={styles.thirdStepHeader}>
                <div className={styles.thirdStepBg}></div>
                <div className={styles.thirdStepArea}>Área</div>
                <div className={styles.thirdStepRole}>Cargo</div>
                <div className={styles.thirdStepName}>Nombre</div>
                <div className={styles.thirdStepEmail}>Mail</div>
            </div>
            {responsibleUsers?.map((item, index) => (
                <div className={styles.thirdStepRow} key={index}>
                    <div className={styles.thirdStepName}>
                        <div className={styles.thirdStepText}>
                            {item.nombre}
                        </div>
                    </div>
                    <div className={styles.thirdStepEmail}>
                        <div className={styles.thirdStepText}>
                            {item.correo}
                        </div>
                    </div>
                    <div className={styles.thirdStepRole}>
                        <div className={styles.thirdStepText}>
                            {item.cargo}
                        </div>
                    </div>
                    <div className={styles.thirdStepArea}>
                        <div className={styles.thirdStepText}>
                            {item.area}
                        </div>
                    </div>
                    <div className={styles.thirdStepDropdown}>
                        {type === 'single' ? (
                            <Checkbox
                                checked={responsibleId === item.id}
                                style={{
                                    color: '#a6d04f'
                                }}
                                onClick={() => onCheckboxClick(item.id)}
                                icon={<RadioButtonUnchecked />}
                                checkedIcon={<RadioButtonChecked />}
                            />
                        ) : (
                            <Checkbox
                                checkedIcon={<CheckBoxOutlined />}
                                style={{
                                    color: '#00828966'
                                }}
                                onClick={() => onCheckboxClick(item.id)}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResponsiblesTable

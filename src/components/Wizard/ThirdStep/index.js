import { SuccesMessageResult } from '@/components/confirmContents/successResultMessage'
import Loading from '@/components/Loading'
import MessageEmpty from '@/components/MessangeEmpty'
import PlusIcon from '@/Icons/PlusIcon'
import { getResponsibleUsers } from '@/services/usuarioResponsable.service'
import { CheckBoxOutlined, RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import { Button, Checkbox, Dialog, DialogContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ResponsiblesTable from './ResponsiblesTable'
import styles from './ThirdStep.module.scss'

const ThirStep = ({ prev, setopen }) => {
    const [responsibleUsers, setresponsibleUsers] = useState(null);
    const [responsibleId, setResponsibleId] = useState(null);
    const [expandTable, setExpandTable] = useState(false);
    const [activateFinish, setActivateFinish] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        getResponsibleUsers().then((data) => {
            setresponsibleUsers(data.data)
        })
    }, [])
    console.log("responsibleId", responsibleId);
    console.log("activateFinish", activateFinish);
    const handleCheckboxClick = (id) => {
        setResponsibleId(prevId => prevId === id ? null : id);
        setActivateFinish(!activateFinish);
    }

    const handleCheckBoxMultiple = (id) => {

    }

    const handleClickAccept = () => {
        setAlert(!alert);
    }

    if (responsibleUsers === null) {
        return (
            <div className={styles.loadingContainer}>
                <Loading size={"massive"} />
            </div>
        )
    }

    if (responsibleUsers?.length === 0) {
        return (
            <MessageEmpty title={"No se encontró información."} />
        )
    }

    const handleButtonClick = () => {
        setopen(!open)
        setAlert(!alert)
    }


    return (

        <>
            <div className={styles.thirdStepContainer}>
                <div className={styles.thirdStepHeader}>
                    <div className={styles.thirdStepTitle}>
                        <div className={`${styles.thirdStepText} ${styles.thirdStepNormal}`}>
                            Asignar a
                        </div>
                        <div className={`${styles.thirdStepText} ${styles.thirdStepRequired}`}>
                            *
                        </div>
                    </div>
                    <div className={styles.thirdStepDot}>
                        <div className={styles.thirdStepInner}></div>
                    </div>
                    <div className={styles.thirdStepButton}>
                        <div className={styles.thirdStepIcon}>
                            <PlusIcon />
                        </div>
                        <div className={styles.thirdStepText}>
                            Agregar Nuevo Responsable
                        </div>
                    </div>
                </div>

                <ResponsiblesTable responsibleUsers={responsibleUsers} onCheckboxClick={handleCheckboxClick} responsibleId={responsibleId} />

                <div className={styles.thirdStepOptions}>
                    <div className={styles.thirdStepCopy}>
                        <span>Copiar a </span>
                        <Checkbox
                            checkedIcon={<CheckBoxOutlined />}
                            style={{
                                color: '#00828966'
                            }}
                            onClick={() => setExpandTable(!expandTable)}
                        />
                    </div>
                    <div className={styles.thirdStepResponsible}>
                        <span>Asignar  Responsable en otro momento</span>
                        <Checkbox
                            checkedIcon={<CheckBoxOutlined />}
                            style={{
                                color: '#00828966'
                            }}
                            onClick={() => setActivateFinish(!activateFinish)}
                        />
                    </div>
                </div>
                {expandTable && (
                    <ResponsiblesTable responsibleUsers={responsibleUsers} onCheckboxClick={handleCheckBoxMultiple} type={'multiple'} />
                )}
                <div className={styles.containerButtons}>
                    <div className={styles.nextButton} onClick={prev}>
                        <div className={styles.nextButtonText}>Atras</div>
                    </div>
                </div>
                <div className={styles.thirdStepButtonsContainer}>
                    <div className={styles.thirdStepButtons}>
                        <Button
                            type="submit"
                            color="primary"
                            className="secondary-abe-button"
                            size="large"
                            fullWidth
                            style={{
                                height: 40,
                                borderRadius: 6,
                                width: 200,
                                fontSize: 18
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setopen(false);
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            className="primary-abe-button"
                            size="large"
                            fullWidth
                            style={{
                                resize: "none",
                                height: 40,
                                borderRadius: 6,
                                width: 200,
                                fontSize: 18,
                            }}
                            disabled={!activateFinish}
                            onClick={handleClickAccept}
                        >
                            Finalizar
                        </Button>
                    </div>
                </div>
            </div>
            <Dialog open={alert} fullWidth={true}>
                <DialogContent>
                    <SuccesMessageResult
                        text={'¡Se ha Creado con Exito la Solicitud! '}
                        onButtonClick={handleButtonClick}
                        succesActionButtonText={'Aceptar'}
                    />
                </DialogContent>
            </Dialog>
        </>

    )
}

export default ThirStep

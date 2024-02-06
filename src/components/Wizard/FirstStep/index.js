import { PeriodInput } from '@/components/PeriodInput';
import SelectPortal from '@/components/SelectPortal';
import { formatOptions } from '@/helpers/format';
import { getProjectIdFromURL } from '@/helpers/idProject';
import { getProyectoVisita } from '@/services/proyectoVisita.service';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../Wizard.module.scss'

const FirstStep = ({ next }) => {
    const [visitaselected, setVisitaselected] = useState(null);
    const [optionsVisita, setOptionsVisita] = useState([]);
    const [fechaVencimiento, setFechaVencimiento] = useState(null);
    const [errors, setErrors] = useState('')
    const id_proyecto = getProjectIdFromURL();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProyectoVisita(id_proyecto)
            setOptionsVisita(formatOptions(data.data, 'name', 'id_proyecto_visita'));
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (fechaVencimiento === null) {
            setErrors('Este campo es requerido')
        } else {
            setErrors(null)
        }
    }, [fechaVencimiento])


    const handleChageVisit = (value) => {
        setVisitaselected(value)
    }

    return (
        <>
            <div className={styles.formFields}>
                <div className={styles.formGroup} style={{ width: '30%' }}>
                    <SelectPortal
                        projectContainerClass={styles.projectContainerClass}
                        className={styles.selectContainerFirstStep}
                        projectTitleClass={styles.projectTitleClass}
                        selectionBoxClass={styles.selectionBoxClass}
                        title={"Visita"}
                        placeholder={"Selecciona Visita"}
                        options={optionsVisita}
                        handleChange={(value) => handleChageVisit(value)}
                    />
                </div>

                <div className={styles.formGroup} style={{ width: '40%' }}>

                    <div className={styles.formLabel}>
                        <div><span className={styles.formText}>Fecha de Vencimiento</span><span className={styles.formLabelRequired}>*</span><span className={styles.formText}> </span></div>
                    </div>
                    <PeriodInput
                        name={"fecha_inicio"}
                        placeholder={"Fecha"}
                        containerStyle={{
                            padding: "5px 5px 5px 0px",
                            width: 158,
                            height: 40,
                        }}
                        size={"mini"}
                        onChange={(event, data) => {
                            setFechaVencimiento(data?.value,);
                        }}
                    />
                    {errors && <span className='errors'>{errors}</span>}
                </div>
            </div>

            <div className={styles.formLabel}>
                <div><span className={styles.formText}>Descripción</span></div>
            </div>

            <div className={styles.description}>
                <div className={styles.descriptionText}>Escribir una descripción breve...</div>
            </div>

            {fechaVencimiento && (
                <div className={styles.containerButtonsFather} style={{justifyContent: 'end'}}>
                    <div className={styles.containerButtons}>
                        <div className={styles.nextButton} onClick={next}>
                            <div className={styles.nextButtonText}>Siguiente</div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
};

export default FirstStep
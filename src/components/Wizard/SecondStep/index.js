import { CustomConfirmModal } from '@/components/confirmModal';
import CloseIcon from '@/Icons/CloseIcon'
import PlusIcon from '@/Icons/PlusIcon';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from '../Wizard.module.scss'

const SecondStep = ({ next, prev }) => {
    const [rows, setRows] = useState([{ name: 'Arqueo de Caja', description: 'Arqueo de Caja' }]);
    const [deletionIndex, setDeletionIndex] = useState(-1);


    const handleChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
        // TODO ACTUALIZAR BACKEND
    };

    const handleBlur = (index, field, value) => {
        if (value !== '') {
            // TODO AGREGAR AL BACKEND
        }
    };

    const addRow = () => {
        setRows([...rows, { name: '', description: '' }]);
    };

    const removeRow = (index) => {
        const newRows = [...rows];
        newRows.splice(index, 1);
        setRows(newRows);
        // TODO ELIMINAR BACKEND 
    };

    const confirmDelete = (index) => {
        setDeletionIndex(index);
    };

    const cancelDelete = () => {
        setDeletionIndex(-1);
    };

    const isValidName = rows.some(row => row.name.trim() !== '');

    let confirmMessage = `¿ Seguro quiere Borrar este Requerimiento "${rows[deletionIndex]?.name || ''}" ?`;

    return (
        <>
            <div className={styles.containerSecond}>
                <div className={styles.textSecond}>
                    Adjunte documentos fácilmente. Encuentre todo aquí para simplificar su proceso.
                </div>
                <div className={styles.secondStepContainer}>
                    <div className={styles.secondStepInnerContainer}>
                        <div className={styles.secondStepPadding1}>
                            <div className={styles.secondStepText}>Nombre del Requerimiento</div>
                        </div>
                        <div className={styles.secondStepPadding2}>
                            <div className={styles.secondStepText}>Descripción</div>
                        </div>
                    </div>
                    {rows.map((row, index) => (
                        <div key={index} className={styles.secondStepInnerContainer}>
                            <div className={styles.secondStepWidth}>
                                <div style={{ width: '15vw' }}>
                                    <input
                                        value={row.name}
                                        type="text"
                                        placeholder="Escribir..."
                                        className={styles.inputField}
                                        onChange={(event) => handleChange(index, 'name', event.target.value)}
                                        onBlur={(event) => handleBlur(index, 'name', event.target.value)}
                                    />
                                </div>
                                <div className={styles.secondStepHeight}>
                                    <input
                                        value={row.description}
                                        type="text"
                                        placeholder="Escribir una descripción breve..."
                                        className={styles.inputField}
                                        onChange={(event) => handleChange(index, 'description', event.target.value)}
                                        onBlur={(event) => handleBlur(index, 'description', event.target.value)}
                                    />
                                </div>
                                {rows[index].name !== '' && (
                                    <div className={styles.secondStepRelative}>
                                        <CloseIcon onClick={() => confirmDelete(index)} style={{ cursor: 'pointer' }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className={styles.addRequirementContainer} onClick={addRow}>
                        <div className={styles.addRequirementRelative}>
                            <PlusIcon size='big' />
                        </div>
                        <div className={styles.addRequirementText}>Agregar otro Requerimiento</div>
                    </div>
                </div>
                <CustomConfirmModal
                    open={deletionIndex !== -1}
                    onCancel={cancelDelete}
                    onConfirm={() =>
                        removeRow(deletionIndex)
                    }
                    confirmMessage={confirmMessage}
                    succesActionMessage="¡Eliminado! "
                    wrongActionMessage="Error al eliminar"
                />
            </div>
            <div className={styles.containerButtonsFather}>
                <div className={styles.containerButtons}>
                    <div className={styles.nextButton} onClick={prev}>
                        <div className={styles.nextButtonText}>Atras</div>
                    </div>
                </div>
                {isValidName && (
                    <div className={styles.containerButtons}>
                        <div className={styles.nextButton} onClick={next}>
                            <div className={styles.nextButtonText}>Siguiente</div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default SecondStep

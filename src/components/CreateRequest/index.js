import AbiIcon from '@/Icons/AbiIcon';
import Add from '@/Icons/Add'
import CloseIcon from '@/Icons/CloseIcon';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Wizard from '../Wizard';
import styles from './CreateRequest.module.scss'


const CreateRequest = () => {
    const [open, setOpen] = useState(false);
    const [openWizard, setopenWizard] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    const onSubmit = data => console.log(data);

    console.log("open", errors);

    return (
        <>
            <div className={styles.createRequest} onClick={() => setOpen(true)}>
                <div>
                    <Add />
                </div>
                <div>Crear Nueva Solicitud</div>
            </div>
            <Dialog open={open} fullWidth={true}>
                <DialogTitle>
                    <div className={styles.containerRequestModal}>
                        <div className={styles.modalTitle}>
                            <div className={styles.container}>
                                <div className={styles.innerContainer}>
                                    <span className={styles.title}>Titulo de Requerimiento</span>
                                    <span className={styles.required}>*</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.closeIconCustomStyle}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                        >
                            <AbiIcon style={{ margin: "auto 10px" }} />
                            <CloseIcon />
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register('titulo', { required: true })}
                            placeholder="Escribir...."
                            className={styles.inputCreateRequest}
                        />
                        {errors.titulo && <span className={styles.errors}>Este campo es requerido</span>}

                        <div className={styles.containerButtons}>
                            <Button
                                type="submit"
                                color="primary"
                                className="secondary-abe-button"
                                size="large"
                                fullWidth
                                style={{
                                    height: 30,
                                    borderRadius: 6,
                                    width: 80,
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setOpen(false);
                                }}
                            >
                                Cencelar
                            </Button>
                            {isValid && (
                                <Button
                                    disabled={!isValid}
                                    type="submit"
                                    color="primary"
                                    className="primary-abe-button"
                                    size="large"
                                    fullWidth
                                    style={{
                                        resize: "none",
                                        height: 30,
                                        borderRadius: 6,
                                        width: 80,
                                    }}
                                    onClick={() => {
                                        setOpen(false)
                                        setopenWizard(true)
                                    }}
                                >
                                    Aceptar
                                </Button>
                            )}
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <Dialog open={openWizard} fullWidth={true}>
                <DialogTitle>
                    <div className={styles.containerRequestModal}>
                        <div className={styles.modalTitle}>
                            Crear Nueva Solicitud
                        </div>
                        <div
                            className={styles.closeIconCustomStyle}
                            onClick={(e) => {
                                e.stopPropagation();
                                setopenWizard(false);
                            }}
                        >
                            <AbiIcon style={{ margin: "auto 10px" }} />
                            <CloseIcon />
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Wizard />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateRequest

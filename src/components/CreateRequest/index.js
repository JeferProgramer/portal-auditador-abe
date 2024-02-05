import AbiIcon from '@/Icons/AbiIcon';
import Add from '@/Icons/Add'
import CloseIcon from '@/Icons/CloseIcon';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react'
import Wizard from '../Wizard';
import styles from './CreateRequest.module.scss'


const CreateRequest = () => {
    const [open, setOpen] = useState(false);
    console.log("open", open);


    return (
        <>
        <div className={styles.createRequest} onClick={() => setOpen(true)}>
            <div>
                <Add />
            </div>
            <div>Crear Nueva Solicitud</div>
        </div>
         <Dialog open={open} fullWidth maxWidth="sm">
                <DialogTitle>
                    <div className={styles.containerRequestModal}>
                        <div className={styles.modalTitle}>
                            Crear Nueva Solicitud
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
                   <Wizard/>
                </DialogContent>
         </Dialog>
        </>
    )
}

export default CreateRequest

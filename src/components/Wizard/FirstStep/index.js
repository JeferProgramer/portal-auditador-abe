import SelectPortal from '@/components/SelectPortal';
import CheckCircle from '@/Icons/CheckCircle';
import ChevronRight from '@/Icons/ChevronRight';
import Layers from '@/Icons/Layers';
import Users from '@/Icons/Users';
import styles from '../Wizard.module.scss'

const FirstStep = ({ next, handleChageVisit }) => (
    <>
        <div className={styles.containerWizard}>

            <div className={styles.steps}>

                <div className={styles.step}>
                    <div className={styles.stepIcon}>
                        <CheckCircle />
                    </div>
                    <div className={styles.stepTitle}>1. Información Principal</div>
                </div>

                <div className={styles.divider}>
                    <ChevronRight />
                </div>

                <div className={styles.step}>
                    <div className={styles.stepIcon}>
                        <Layers stroke="#9197B3" />
                    </div>
                    <div className={styles.stepTitleDesactivate}>2. Archivos Solicitados</div>
                </div>

                <div className={styles.divider}>
                    <ChevronRight />
                </div>

                <div className={styles.step}>
                    <div className={styles.stepIcon}>
                        <Users />
                    </div>
                    <div className={styles.stepTitleDesactivate}>3. Asignación</div>
                </div>

            </div>

            <div className={styles.form}>
                <div className={styles.formFields}>
                    <div className={styles.formName}>
                        <div className={styles.formGroup}>
                            <div className={styles.formLabel}>
                                <div><span className={styles.formText}>Nombre de la Solicitud</span><span className={styles.formLabelRequired}>*</span></div>
                            </div>
                            <input
                                type="text"
                                placeholder="Escribir..."
                                className={styles.inputField}
                                onChange={(event) => handleChange(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup} style={{ width: '40%' }}>

                        <SelectPortal
                            projectContainerClass={styles.projectContainerClass}
                            className={styles.selectContainerFirstStep}
                            projectTitleClass={styles.projectTitleClass}
                            selectionBoxClass={styles.selectionBoxClass}
                            title={"Visita"}
                            placeholder={"Selecciona Visita"}
                            options={[]}
                            handleChange={(value) => handleChageVisit(value)}
                        />
                    </div>

                    <div className={styles.formGroup} style={{ width: '40%' }}>

                        <div className={styles.formLabel}>
                            <div><span className={styles.formText}>Fecha de Vencimiento</span><span className={styles.formLabelRequired}>*</span><span className={styles.formText}> </span></div>
                        </div>

                        <input
                            type="text"
                            placeholder="Escribir..."
                            className={styles.inputField}
                            onChange={(event) => handleChange(event.target.value)}
                        />

                    </div>
                </div>

                <div className={styles.formLabel}>
                    <div><span className={styles.formText}>Descripción</span></div>
                </div>

                <div className={styles.description}>
                    <div className={styles.descriptionText}>Escribir una descripción breve...</div>
                </div>

                <div className={styles.containerButtons}>
                    <div className={styles.nextButton} onClick={next}>
                        <div className={styles.nextButtonText}>Siguiente</div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default FirstStep
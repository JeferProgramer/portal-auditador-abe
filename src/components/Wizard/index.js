
import WizardLayout from '@/Layouts/WizardLayout';
import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import styles from './Wizard.module.scss'

const Paso2 = ({ next, prev }) => (
    <div>
        <h2>Paso 2</h2>
        <button onClick={prev}>Anterior</button>
        <button onClick={next}>Siguiente</button>
    </div>
);

const Paso3 = ({ prev }) => (
    <div>
        <h2>Paso 3</h2>
        <button onClick={prev}>Anterior</button>
    </div>
);

const pasos = [FirstStep, SecondStep, Paso3];

const Wizard = () => {
    const [pasoActual, setPasoActual] = useState(0);

    const next = () => setPasoActual(Math.min(pasoActual + 1, pasos.length - 1));
    const prev = () => setPasoActual(Math.max(pasoActual - 1, 0));

    const PasoComponente = pasos[pasoActual];

    return (
        <WizardLayout currentStep={pasoActual}>
            <PasoComponente next={next} prev={prev} />
        </WizardLayout>
    );
};

export default Wizard;


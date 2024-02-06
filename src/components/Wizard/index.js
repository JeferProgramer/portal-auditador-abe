
import WizardLayout from '@/Layouts/WizardLayout';
import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirStep from './ThirdStep';

const pasos = [FirstStep, SecondStep, ThirStep];

const Wizard = ({ setopenWizard }) => {
    const [pasoActual, setPasoActual] = useState(0);

    const next = () => setPasoActual(Math.min(pasoActual + 1, pasos.length - 1));
    const prev = () => setPasoActual(Math.max(pasoActual - 1, 0));

    const PasoComponente = pasos[pasoActual];

    return (
        <WizardLayout currentStep={pasoActual}>
            <PasoComponente next={next} prev={prev} setopen={setopenWizard} />
        </WizardLayout>
    );
};

export default Wizard;


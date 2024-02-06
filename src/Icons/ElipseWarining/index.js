
import React from 'react';

/**
 * Componente ElipseWarning que muestra un ícono de advertencia con elipses concéntricas.
 * Este componente no acepta props y se centra en mostrar un diseño específico.
 * 
 */
const ElipseWarning = () => {
    return (
        <div style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Contenedor principal para posicionar correctamente los SVGs */}
            <div style={{ position: 'relative', width: '80px', height: '80px' }}>

                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '0', left: '0' }}>
                    <ellipse cx="40" cy="40" rx="40" ry="40" fill="rgba(255, 141, 35, 0.13)" />
                </svg>

                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <circle cx="34.4004" cy="34.6001" r="34" fill="rgba(255, 141, 35, 0.13)" />
                </svg>

                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <path d="M28.0003 37.3337V28.0003M28.0003 18.667H28.0237M51.3337 28.0003C51.3337 40.887 40.887 51.3337 28.0003 51.3337C15.1137 51.3337 4.66699 40.887 4.66699 28.0003C4.66699 15.1137 15.1137 4.66699 28.0003 4.66699C40.887 4.66699 51.3337 15.1137 51.3337 28.0003Z" stroke="#FF8D23" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default ElipseWarning;

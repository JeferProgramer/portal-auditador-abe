import {  toCamelCase } from '@/helpers/format'
import { getStatusColor } from '@/helpers/getStatusColor'
import Close from '@/Icons/Close'
import React from 'react'
import styles from './FilterTags.module.scss'

const FilterTags = ({ estadoState, rubroState, setEstadoState, setRubroState }) => {
    const estados = Object.keys(estadoState).filter(key => estadoState[key]);
    const rubros = Object.keys(rubroState).filter(key => rubroState[key]);
    const hasTrueElements = estados.length > 0 || rubros.length > 0;

    const handleRemoveEstado = (estado) => {
        setEstadoState(prevState => ({ ...prevState, [estado]: false }));
    };

    const handleRemoveRubro = (rubro) => {
        setRubroState(prevState => ({ ...prevState, [rubro]: false }));
    };

    return (
        <div className={styles.filterTagsContainer} style={{ display: hasTrueElements ? 'flex' : 'none' }}>
            {estados.map(estado => (
                <div key={estado} className={styles.filterTagsItem}>
                    <div
                        className={styles.statusCircle}
                        style={{ backgroundColor: getStatusColor(estado) }}
                    />
                    <div className={styles.filterTagsText}>{toCamelCase(estado)}</div>
                    <div style={{ cursor: 'pointer', display: 'flex' }} onClick={() => handleRemoveEstado(estado)}>
                        <Close />
                    </div>
                </div>
            ))}
            {rubros.map(rubro => (
                <div key={rubro} className={styles.filterTagsItem}>
                    <div className={styles.filterTagsText}>{rubro}</div>
                    <div style={{ cursor: 'pointer', display: 'flex' }} onClick={() => handleRemoveRubro(rubro)}>
                        <Close />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FilterTags;

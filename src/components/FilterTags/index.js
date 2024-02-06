import { toCamelCase } from '@/helpers/format'
import { getStatusColor } from '@/helpers/getStatusColor'
import Close from '@/Icons/Close'
import React from 'react'
import styles from './FilterTags.module.scss'

const FilterTags = ({ estadoState, setEstadoState }) => {
    const estados = Object.keys(estadoState).filter(key => estadoState[key]);
    const hasTrueElements = estados.length > 0;

    const handleRemoveEstado = (estado) => {
        setEstadoState(prevState => ({ ...prevState, [estado]: false }));
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
        </div>
    )
}

export default FilterTags;

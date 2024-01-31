import { normalizeString, searchInsensitive, toCamelCase } from '@/helpers/format'
import { getStatusColor } from '@/helpers/getStatusColor'
import ArrowLeft from '@/Icons/ArrowLeft'
import ArrowRight from '@/Icons/ArrowRight'
import Magnifying from '@/Icons/Magnifying'
import { filters, statusColors } from '@/utils/filters'
import React, { useEffect, useState } from 'react'
import styles from './FiltersCalendar.module.scss'

const FiltersCalendar = ({ data, setData, handlePrev, handleNext, viewsRender, activate }) => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState("");


    const handleFilterClick = (filter) => {
        if (selectedFilter === filter.toLowerCase()) {
            setSelectedFilter('');
        } else {
            setSelectedFilter(filter.toLowerCase());
        }
    };

    useEffect(() => {
        if (activate) {
            setSelectedFilter('')
        }
    }, [activate])


    useEffect(() => {
        let filteredData = data;
        if (selectedFilter !== '') {
            filteredData = data?.filter(item => item.status.toLowerCase() === selectedFilter);
        }
        setData(filteredData);
    }, [selectedFilter]);

    useEffect(() => {
        const filteredSearch = searchInsensitive(searchTerm, data);
        setData(filteredSearch)
    }, [searchTerm])


    const handleChangeSearch = (value) => {
        setSearchTerm(normalizeString(value));
    };

    return (
        <div className={styles.filtersCalendarContainerMain}>
            <div className={styles.filtersCalendarChildContainer}>
                <div className={styles.filtersCalendarChildItem}>
                    <div className={styles.filtersCalendarChildInnerItem}>
                        <div className={styles.filtersCalendarChildInnerDiv} onClick={handlePrev}>
                            <ArrowLeft />
                        </div>
                    </div>
                </div>
                <div className={styles.filtersCalendarChildItem}>
                    <div className={styles.filtersCalendarChildTextItem}>Hoy</div>
                </div>
                <div className={styles.filtersCalendarChildItem}>
                    <div className={styles.filtersCalendarChildInnerItem}>
                        <div className={styles.filtersCalendarChildInnerDiv} onClick={handleNext}>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.filtersCalendarContainer}>
                <div className={styles.filtersCalendarItem}>
                    <div className={styles.filtersCalendarLabel}>Filtrar Por :</div>
                </div>
                <div className={styles.filtersCalendarOptions}>
                    {filters.map(filter => (
                        <div
                            key={filter}
                            className={selectedFilter === filter.toLowerCase() ? styles.filtersCalendarOptionApproved : styles.filtersCalendarOption}
                            onClick={() => handleFilterClick(filter)}
                            style={selectedFilter === filter.toLowerCase() ? { backgroundColor: statusColors[filter.toLowerCase()] } : {}}
                        >
                            {toCamelCase(filter)}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.searchCalendarContainer}>
                <div className={styles.searchCalendarInnerContainer}>
                    <Magnifying />
                </div>
                <input
                    type="text"
                    placeholder="Buscar"
                    className={styles.searchCalendarText}
                    onChange={(event) => handleChangeSearch(event.target.value)}
                />
            </div>
            {viewsRender()}

        </div>
    )
}

export default FiltersCalendar

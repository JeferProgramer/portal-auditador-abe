import Calendar from '@/Icons/Calendar';
import InfoRed from '@/Icons/InfoRed';
import { filters } from '@/utils/filters';
import React, { useState } from 'react'
import AlertReturned from '../AlertReturned';
import { StatusInidicator } from '../StatusIndicator';
import styles from './EventContent.module.scss'

const EventContent = ({ event, timeText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.eventContent} onClick={() => console.log("click")}>
            <div className={styles.eventContentWrapper}>
                <div className={styles.eventDetails}>
                    <div className={styles.eventTitle}>
                        <StatusInidicator state={event.extendedProps.state} />
                        <div className={styles.eventDescription} title={event.title}>{event.title}</div>
                        {event.extendedProps.state.toLowerCase() === filters[1] && (
                          <AlertReturned/>
                        )}
                    </div>
                    <div className={styles.eventDate}>
                        <div className={styles.dateDot}>
                            <Calendar />
                        </div>
                        <div className={styles.eventDateText}>
                            Fecha de Vencimiento:
                            <span
                                style={{
                                    color: event.extendedProps.state.toLowerCase() === filters[0] ? '#FF0B0B' : 'inherit'
                                }}
                            >
                                {event.extendedProps.date_request}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventContent;


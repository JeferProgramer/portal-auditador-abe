import React, { useEffect, useRef, useState } from 'react'
import timeGridPlugin from "@fullcalendar/timegrid"
import iCalendarPlugin from "@fullcalendar/icalendar"
import fullcalendarEsLocale from "@fullcalendar/core/locales/es"
import formatFunc from "date-fns/format"
import dayGridPlugin from "@fullcalendar/daygrid";
import addHours from "date-fns/addHours"
import FullCalendar from '@fullcalendar/react'
import EventContent from '@/components/EventContent'
import styles from './Requirements.calendar.module.scss'
import FiltersGenerals from '@/components/FiltersGenerals/Filters'
import { EventContentArg } from '@fullcalendar/react';
import CustomEventStates from '@/components/CustomEventStates'
import { mapDataToEvents } from '@/helpers/format'
import FiltersCalendar from '@/components/FiltersCalendar'
import HeaderCalendar from '@/components/HeaderCalendar'
import interactionPlugin from "@fullcalendar/interaction";

const RequirementsCalendar = ({ data, viewsRender }) => {
    const [title, setTitle] = useState('');
    const [localdata, setLocaldata] = useState(data);
    const [events, setEvents] = useState([]);
    const [dataFilters, setDataFilters] = useState(data);
    const [activate, setActivate] = useState(false);
    const calendarRef = useRef();
    const calendarRef2 = useRef();
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setLocaldata(data)
        setDataFilters(data)
    }, [data])

    const slotLabelFormatter = (date) => {
        return formatFunc(addHours(date.date.marker, 5), "h:mmaaa")
    }

    const handleEventClick = ({ event, jsEvent, el }) => {
        jsEvent.preventDefault();
    };

    useEffect(() => {
        setEvents(mapDataToEvents(localdata))
    }, [localdata])

    useEffect(() => {
        const calendarApi = calendarRef.current.getApi();
        setTitle(calendarApi.currentData.viewTitle)
    }, [calendarRef])


    const handlePrev = () => {
        const calendarApi = calendarRef.current.getApi();
        const calendarApi2 = calendarRef2.current.getApi();
        calendarApi.prev();
        calendarApi2.prev();
        setTitle(calendarApi.currentData.viewTitle);
    }

    const handleNext = () => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.next();
        const calendarApi2 = calendarRef2.current.getApi();
        calendarApi2.next();
        setTitle(calendarApi.currentData.viewTitle);
    }

    const setNow = (selectedDate) => {
        setCurrentDate(selectedDate);
    };


    console.log("currentDate", currentDate);
    console.log("event", events);
    const handleDateClick = (info) => {
        // console.log(info);
        // const calendarApi = calendarRef.current.getApi();
        // console.log("calendarAPI", calendarApi.getDate());
        // calendarApi.gotoDate(info.date)
        setNow(info.date);
    };

    return (
        <div className={styles.calendarContainerMain}>
            <div className={styles.observationsFieldContainer}>
                <div className={styles.calendarFirst}>
                    <HeaderCalendar calendar={calendarRef2.current} title={title} handlePrev={handlePrev} handleNext={handleNext} />
                    <FullCalendar
                        key={currentDate}
                        now={currentDate}
                        ref={calendarRef2}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale={fullcalendarEsLocale}
                        weekends={false}
                        headerToolbar={{
                            left: "",
                            center: "",
                            right: "",
                        }}
                        height='50vh'
                        events={events}
                        // expandRows={true}
                        scrollTime={'06:00:00'}
                        eventContent={({ event }) => <CustomEventStates event={event} />}
 
                        dateClick={handleDateClick}
                        editable={true}
                    />
                </div>
                <FiltersGenerals data={data} setData={setLocaldata} column={true} setDataFilters={setDataFilters} setActivate={setActivate} />
            </div>
            <div className={styles.containerCalendarFull}>
                <FiltersCalendar data={dataFilters} setData={setLocaldata} handlePrev={handlePrev} handleNext={handleNext} viewsRender={viewsRender} activate={activate} />
                <FullCalendar
                    key={currentDate}
                    now={currentDate}
                    ref={calendarRef}
                    className={styles['fc-daygrid-day-top']}
                    plugins={[dayGridPlugin, timeGridPlugin, iCalendarPlugin]}
                    initialView='dayGridMonth'
                    locale={fullcalendarEsLocale}
                    weekends={false}
                    headerToolbar={{
                        left: "",
                        center: "",
                        right: ""
                    }}
                    dayHeaderFormat={{ weekday: "long" }}
                    slotLabelFormat={slotLabelFormatter}
                    eventTimeFormat={{
                        hour: "numeric",
                        hour12: true,
                        minute: "2-digit",
                        omitZeroMinute: true,
                        meridiem: "short"
                    }}
                    allDaySlot={false}
                    slotMinTime='08:00:00'
                    slotMaxTime='18:30:00'
                    events={events}
                    eventClick={handleEventClick}
                    contentHeight='10px'
                    height='80vh'
                    eventContent={({ event, timeText }) => <EventContent event={event} timeText={timeText} />}
                />
            </div>
        </div>
    )
}



export default RequirementsCalendar


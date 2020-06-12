
import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment';

// let localizer;
// import('moment').then((moment) => {
//     console.log('momentmoment', moment);
//     localizer = momentLocalizer(moment);
// });

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k]);

const CalendarItem = ({ CustomToolbar, handleSelect, eventList, eventPropGetter }) => {
    console.log('eventListeventListeventList', eventList);
    return (<Calendar
        selectable
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        culture='fr-FR'
        components={{
            toolbar: CustomToolbar,
            //event: EventComponent
        }}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelect}
        views={allViews}
        eventPropGetter={eventPropGetter}
    />)
    }

export default CalendarItem;
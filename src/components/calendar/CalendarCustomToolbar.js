
import React from 'react';
//import { Toolbar } from 'react-big-calendar';

// example implementation of a wrapper
const CalendarToolbar = (Toolbar) => {
    const { label, onNavigate, onView } = Toolbar;

    return (
        <div className="rbc-toolbar">
            <div className="rbc-btn-group">
                <button type="button" onClick={() => onNavigate('TODAY')}>Aujourd'hui</button>
                <button type="button" onClick={() => onNavigate('PREV')}>Précedent</button>
                <button type="button" onClick={() => onNavigate('NEXT')}>Suivant</button>
            </div>
            <div className="rbc-toolbar-label">{label}</div>
            <div className="rbc-btn-group">
                <button type="button" onClick={onView.bind(null, 'month')}>Mois</button>
                <button type="button" onClick={onView.bind(null, 'week')}>Semaine</button>
                <button type="button" onClick={onView.bind(null, 'day')}>Jour</button>
                <button type="button" onClick={onView.bind(null, 'agenda')}>Agenda</button>
            </div>
        </div>
    );
};

export default CalendarToolbar;
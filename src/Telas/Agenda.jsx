import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Agenda = () => {
  const [dates, setDates] = useState(new Date());
  const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2022-12-14T10:00:00',
      end: '2022-12-14T12:00:00',
    },
    {
      id: 2,
      title: 'event 2',
      start: '2022-12-16T13:00:00',
      end: '2022-12-16T18:00:00',
      color: "red"
    },
    { 
      id: 3, 
      title: 'event 3', 
      start: '2022-12-17', 
      end: '2022-12-20' },
  ];

  return (
    <div>
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          center: 'dayGridMonth,timeGridWeek,timeGridDay new',
        }}
        events={events}
      />
    </div>
  );
};

export default Agenda;

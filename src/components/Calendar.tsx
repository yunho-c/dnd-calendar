import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react'; // import the FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // import the DayGrid plugin

const Calendar: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null); // create a ref to hold the FullCalendar instance

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView('dayGridMonth'); // set the initial view to 'dayGridMonth'
    }
  }, []);

  return (
    <div>
      <FullCalendar
        ref={calendarRef} // pass the ref to the FullCalendar component
        plugins={[dayGridPlugin]} // specify which plugins to use
      />
    </div>
  );
};

export default Calendar;
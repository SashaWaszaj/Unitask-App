import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventsCalendar.css";
import { useNavigate} from 'react-router-dom';

const localizer = momentLocalizer(moment);

const EventsCalendar = ({ events }) => {
  const navigate = useNavigate();

  const eventPropGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color, 
        borderRadius: '5px',
        color: 'black',
        marginTop: '6px',
        fontSize: '17px',
        fontWeight: 'bold',
        border: '0px',
        display: 'flex',              
        alignItems: 'center',         
        justifyContent: 'center',    
        textAlign: 'center'  
      }
    };
  };

  return (
    <div>
    <div className="bigCalendar-container">
      <h2 className="calendar-title">Activities Calendar</h2>
      <div className="contenido">
        <div>
        <p style={{color: "red", margin: "0", marginBottom:"10px"}}>Try adding events in the courses, exams or projects section to see them in the calendar! </p>
        </div>
        <div className="buttons-box">
          <div>
        <button 
          onClick={() => navigate(`/course/new`)} 
          className="button-21" role="button">
          + Course
          </button>
          </div>
          <div>
          <button 
          onClick={() => navigate(`/exam/new`)} 
          className="button-21" role="button">
          + Exam
          </button>
          </div>
          <div>
          <button 
          onClick={() => navigate(`/project/new`)} 
          className="button-21" role="button">
          + Project
          </button>
          </div>
        </div>
        <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, width: 1000, margin: "20px"}}
        eventPropGetter={eventPropGetter} 
        messages={{
          next: "Next",
          previous: "Previous",
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
        }}
      />
      </div>
      </div>
    </div></div>
  );
};

export default EventsCalendar;
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const CourseForm = () => {
  const [course, setCourse] = useState({
    name: '',
    description: '',
    duration: '',
    instructor: '',
    date: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "https://unitask-app.onrender.com/course/new", course
      );
      console.log(response);
      setCourse({
        name: '',
        description: '',
        duration: '',
        instructor: '',
        date: ''
      });
      navigate("/course"); 
    } catch (error) {
      console.log(error);
      alert('Error adding course. Please try again.'); 
    }
  };

  const handleCancel = () => {
    navigate("/course");
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2 className="titulo-secundario">New Course</h2>
      <div>
        <label>Name:</label>
        <input 
        type="text" 
        name="name" 
        value={course.name} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Description (optional):</label>
        <input 
        type="text" 
        name="description" 
        value={course.description} 
        onChange={handleChange} 
        />
      </div>
      <div>
        <label>Duration (hs):</label>
        <input 
        type="text" 
        name="duration" 
        value={course.duration} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Instructor:</label>
        <input 
        type="text" 
        name="instructor" 
        value={course.instructor} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Date:</label>
        <input 
        type="date" 
        name="date" 
        value={course.date} 
        onChange={handleChange}
        />
      </div>
      <button className="button-21" role="button" type="submit">Add Course</button>
      <button className="button-22" role="button" type="button" onClick={handleCancel}>Cancel</button>
    </form></div>
  );
};

export default CourseForm;
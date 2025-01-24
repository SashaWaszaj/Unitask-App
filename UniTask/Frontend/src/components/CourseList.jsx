import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allCourses = async () => {
      try {
        const URL = "http://localhost:8080/course";
        const respuesta = await axios.get(URL);
        const sortedCourses = respuesta.data.sort((a, b) => {
          return new Date(a.dueDate) - new Date(b.dueDate); 
        });
        setCourses(sortedCourses);
      } catch (error) {
        console.log("Error getting course", error);
        setError(error.response?.statusText);
      }
    };

    allCourses();
  }, []);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/course/delete/${id}`);
      setCourses(courses.filter(course => course._id !== id));
      navigate('/course');
    } catch (error) {
      console.log("Error delete course", error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div>
      <div>
      <button 
          onClick={() => navigate(`/course/new`)} 
          className="button-21" role="button">
          Add Course
          </button>
      </div>
      <div className="list">
        <div className="grid">
          {courses.map((course) => (
            <div key={course._id} className="box">
              <div className='title-box'>
                <div>
              <h2 className="titulo">{course.name}</h2>
              </div>
              <div>
              <button 
                  onClick={() => navigate(`/course/${course._id}/edit`)} 
                  className="fa-icon-button" role="button">
                  <i className="fa fa-pencil" aria-hidden="true" style={{fontSize: "10px", backgroundColor: "white"}}></i>
                </button>
                <button 
                  onClick={() => deleteCourse(course._id)}
                  className="fa-icon-button">
                    <i className="fa fa-trash" aria-hidden="true" style={{color:"darkred", fontSize: "10px", backgroundColor: "white"}}></i>
                </button>
                </div>
                </div>
                <div className='description-box'>
                  <div>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration (hs):</strong> {course.duration}</p>
                  </div>
                  <div>
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Date:</strong> {new Date(course.date).toLocaleDateString()}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div> {error}</div>
    </div>
  );
};

export default CourseList;
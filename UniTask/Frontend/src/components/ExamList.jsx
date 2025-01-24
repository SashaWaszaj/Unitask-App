import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllExams = async () => {
      try {
        const URL = "https://unitask-app.onrender.com/exam";
        const respuesta = await axios.get(URL);
        const sortedExams = respuesta.data.sort((a, b) => {
          return new Date(a.dueDate) - new Date(b.dueDate); 
        });
        setExams(sortedExams);
      } catch (error) {
        console.log("Error getting exam", error);
        setError(error.response?.statusText);
      }
    };

    getAllExams();
  }, []);

  const deleteExam = async (id) => {
    try {
      await axios.delete(`https://unitask-app.onrender.com/exam/delete/${id}`);
      setExams(exams.filter(exam => exam._id !== id));
      navigate('/exam');
    } catch (error) {
      console.log("Error delete exam", error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div>
      <div>
      <button 
          onClick={() => navigate(`/exam/new`)} 
          className="button-21" role="button">
          Add Exam
          </button>
      </div>
      <div className="list">
        <div className="grid">
          {exams.map((exam) => (
            <div key={exam._id} className="box">
              <div className='title-box'>
              <div>
              <h2 className="titulo">{exam.title}</h2>
              </div>
              <div>
              <button 
                  onClick={() => navigate(`/exam/${exam._id}/edit`)}  
                  className="fa-icon-button" role="button">
                  <i className="fa fa-pencil" aria-hidden="true" style={{fontSize: "10px", backgroundColor: "white"}}></i>
                </button>
                <button 
                  onClick={() => deleteExam(exam._id)}
                  className="fa-icon-button">
                    <i className="fa fa-trash" aria-hidden="true" style={{color:"darkred", fontSize: "10px", backgroundColor: "white"}}></i>
                </button>
                </div>
                </div>
                <div className='description-box'>
                  <div>
              <p><strong>Subject:</strong> {exam.subject}</p>
              <p><strong>Description:</strong> {exam.description}</p>
              </div>
              <div>
              <p><strong>Date:</strong> {new Date(exam.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {exam.time}</p>
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

export default ExamList;
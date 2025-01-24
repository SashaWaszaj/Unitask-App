import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const URL = "https://unitask-app.onrender.com/project";
        const respuesta = await axios.get(URL);
        const sortedProjects = respuesta.data.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate); 
        });
        setProjects(sortedProjects);
        
      } catch (error) {
        console.log("Error getting projects", error);
        setError(error.response?.statusText);
      }
    };

    getAllProjects();
  }, []);

  const deleteProjects = async (id) => {
    try {
      await axios.delete(`https://unitask-app.onrender.com/project/delete/${id}`);
      setProjects(projects.filter(project => project._id !== id));
      navigate('/project');
    } catch (error) {
      console.log("Error delete project", error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div>
      <div>
      <button 
          onClick={() => navigate(`/project/new`)} 
          className="button-21" role="button">
          Add Project
          </button>
      </div>
      <div className="list">
        <div className="grid">
          {projects.map((project) => (
            <div key={project._id} className="box">
              <div className='title-box'>
                <div>
              <h2 className="titulo">{project.title}</h2>
              </div>
              <div>
              <button 
                  onClick={() => navigate(`/project/${project._id}/edit`)}  
                  className="fa-icon-button" role="button">
                  <i className="fa fa-pencil" aria-hidden="true" style={{fontSize: "10px", backgroundColor: "#F6F7F8"}}></i>
                </button>
                <button 
                  onClick={() => deleteProjects(project._id)}
                  className="fa-icon-button">
                    <i className="fa fa-trash" aria-hidden="true" style={{color:"darkred", fontSize: "10px", backgroundColor: "#F6F7F8"}}></i>
                </button>
                </div>
                </div>
                <div className='description-box'>
                  <div>
              <p><strong>Subject:</strong> {project.subject}</p>
              <p><strong>Description:</strong> {project.description}</p>
              </div>
              <div>
              <p><strong>Due Date:</strong> {new Date(project.dueDate).toLocaleDateString()}</p>
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

export default ProjectList;
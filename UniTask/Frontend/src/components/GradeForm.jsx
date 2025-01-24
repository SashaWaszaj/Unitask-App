import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from 'axios';

const GradeForm = () => {
    const [grade, setGrade] = useState({
        title: '',  
        subject: '',
        description: '',
        grade: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGrade({ ...grade, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('https://unitask-app.onrender.com/grade/create', grade);
            console.log(response);
            setGrade({
                title: '',
                subject: '',
                description: '',
                grade: '',
            });
            navigate("/grade");
        } catch (error) {
            console.error(error);
            setError("Error adding the grade. Please try again.");
        }
    };

    useEffect(() => {
        console.log(grade);
    }, [grade]);

    const handleCancel = () => {
        navigate("/grade");
    };

    return (
        <div>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="titulo-secundario">New Grade</h2>
                <div>
                    <label htmlFor="title">Title:</label> 
                    <input 
                        type="text"
                        id="title"  
                        name="title"  
                        value={grade.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={grade.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description (optional):</label>
                    <input 
                        type="text"
                        id="description"
                        name="description"
                        value={grade.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="grade"> Grade:</label>
                    <input 
                        type="number"
                        id="grade"
                        name="grade"
                        value={grade.grade}
                        onChange={handleChange}
                        required
                    />
                </div>


                <button className="button-21" role="button" type="submit">Add Grade</button>
                <button className="button-22" role="button" type="button" onClick={handleCancel}>Cancel</button>

                <div>{error}</div>
            </form>
        </div></div>
    );
};

export default GradeForm;
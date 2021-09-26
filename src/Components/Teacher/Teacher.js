import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cost from '../Cost/Cost';
import './Teacher.css'
const Teacher = () => {
    const [teachers, setTeachers] = useState([]);
    const [addTeacher, setAddTeacher] = useState([]);
    useEffect(() => {
        fetch('./fack-techer.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    const addTohandel = teacher => {
        const newTeacher = [...addTeacher, teacher];
        setAddTeacher(newTeacher);
    }
    return (
        <div className="main-teacher">
            <div className='card-show'>
                {
                    teachers.map(teacher => <Card key={teacher.nid} teacher={teacher} addTohandel={addTohandel} />)
                }
            </div>
            <div>
                <div className="grand-total">
                    <h3><i style={{ color: "orange" }} className="fas fa-user"></i> Teacher Add : {addTeacher.length}</h3>
                    {
                        < Cost cost={addTeacher} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Teacher;
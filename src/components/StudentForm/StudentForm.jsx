import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function StudentForm() {
    
    const [student, setStudent] = useState('');
    const history = useHistory()


    // Called when the submit button is pressed
    const addStudent = (newStudent) => {
        // POST student to the server
        axios({
            method: 'POST',
            url: '/api/students',
            data: {github_name: newStudent}
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    };

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        addStudent(student);
        clearStudentFields();
        history.push('/allStudents/')
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent(event.target.value)} 
                    placeholder="GitHub username"
                    value={student} />
            <input type="submit" value="Submit" />
        </form>
    );
    
}



export default StudentForm;

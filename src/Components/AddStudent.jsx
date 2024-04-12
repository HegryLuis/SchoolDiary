import React, { useState } from "react";

const AddStudent = ({ students, handleStudents, subjectsToShow }) => {
    const [newStudent, setNewStudent] = useState({
        id: "",
        name: "",
    });

    const addStudent = (event) => {
        event.preventDefault();

        newStudent.id = students.length;
        handleStudents([...students, newStudent]);
        setNewStudent({ id: "", name: "" });
    };

    const handleSelectChange = (subject, value) => {
        setNewStudent((prevStudent) => ({
            ...prevStudent,
            [subject]: Number(value),
        }));
    };

    const handleStudentChange = (event) => {
        setNewStudent({ name: event.target.value });
    };

    return (
        <div className="input-student">
            <h2 className="input-title">Add student</h2>
            {
                <form onSubmit={addStudent}>
                    <input
                        className="input"
                        placeholder="Write new student"
                        type="text"
                        value={newStudent.name}
                        onChange={handleStudentChange}
                        required
                    />
                    <h3>Marks</h3>
                    {subjectsToShow.map((subject, index) => (
                        <select
                            key={index}
                            value={newStudent.subject}
                            onChange={(event) =>
                                handleSelectChange(subject, event.target.value)
                            }
                        >
                            <option value={subject} disabled selected>
                                {subject}
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    ))}
                    <button className="input-butt" type="submit">
                        Add new student
                    </button>
                </form>
            }
        </div>
    );
};

export default AddStudent;

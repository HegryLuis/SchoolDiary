import React, { useState } from "react";

const AddSubject = ({ subjectsToShow, handleSubjects }) => {
    const [newSubject, setNewSubject] = useState("");

    const addSubject = (event) => {
        event.preventDefault();
        handleSubjects([...subjectsToShow, newSubject]);
        setNewSubject("");
    };

    const handleSubjectChange = (event) => {
        setNewSubject(event.target.value);
    };
    return (
        <div className="input-subject">
            <h2 className="input-title">Add new subject</h2>
            <form onSubmit={addSubject}>
                <input
                    className="input"
                    placeholder="Input new subject"
                    type="text"
                    value={newSubject}
                    onChange={handleSubjectChange}
                    required
                />
                <button className="input-butt" type="submit">
                    Add subject
                </button>
            </form>
        </div>
    );
};

export default AddSubject;

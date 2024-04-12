import React from "react";
import DiaryTable from "./DiaryTable";
import AddStudent from "./AddStudent";
import AddSubject from "./AddSubject";

const DiaryWrap = ({
    students,
    subjectsToShow,
    handleStudents,
    handleSubjects,
}) => {
    return (
        <div className="diary-wrap">
            <div className="diary-section">
                <div className="title">
                    <h1>Diary</h1>
                </div>
                <div className="diary">
                    <DiaryTable
                        students={students}
                        subjectsToShow={subjectsToShow}
                        handleStudents={handleStudents}
                    />
                </div>
            </div>
            <div className="input-section">
                <AddStudent
                    students={students}
                    handleStudents={handleStudents}
                    subjectsToShow={subjectsToShow}
                />

                <AddSubject
                    subjectsToShow={subjectsToShow}
                    handleSubjects={handleSubjects}
                />
            </div>
        </div>
    );
};

export default DiaryWrap;

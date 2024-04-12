import React from "react";

const DiaryTable = ({ students, subjectsToShow, handleStudents }) => {
    const sortedStudents = [...students].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    const handleSelectChange = (subject, index) => (event) => {
        const selectedValue = Number(event.target.value);
        const updatedStudents = [...students];
        const student = updatedStudents.find((item) => item.id === index);
        student[subject] = selectedValue;
        handleStudents(updatedStudents);
    };

    return (
        <div className="diary-table">
            <table>
                <thead>
                    <tr>
                        <th>{"Student"}</th>
                        {subjectsToShow.map((subject, index) => (
                            <th key={index}>{subject}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student["name"]}</td>
                            {subjectsToShow.map((subject, index) => (
                                <td key={index}>
                                    <select
                                        value={
                                            student[subject]
                                                ? student[subject]
                                                : "-"
                                        }
                                        onChange={handleSelectChange(
                                            subject,
                                            student.id
                                        )}
                                    >
                                        <option value={"-"} disabled>
                                            {"-"}
                                        </option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DiaryTable;

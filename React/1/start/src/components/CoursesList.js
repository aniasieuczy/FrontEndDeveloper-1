import React from "react";
import CoursesTable from "./CoursesTable";


function CoursesList() {
  return (
    <div className="card">
      <h5 className="card-header">Lista kursów</h5>
      <div className="card-body">
        <CoursesTable />
      </div>
    </div>
  );
}

export default CoursesList;

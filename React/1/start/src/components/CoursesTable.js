import React, { useState } from "react";
import { useEffect } from "react";
import { getCourses } from "../api/coursesApi";
import "../css/images.css";

const CoursesTable = () => {
    // let showImage = true;
    //nie dziala bo nie moze byc zmienna, musi byc set state
    // komponent sie na nowo przeladuje 3 momenty 1 zmiana stanu 2 propsy 3 forceUpdate
    //tylko w tych przypadkach wykryje zmiane stanu
    const [ showImage, setShowImage ] = useState(true);
  const courses1 = [];
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then((_courses) => {
      setCourses(_courses);
    });
  }, []);

  function onLogoButtonClick() {
    setShowImage(!showImage);
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button
                className={showImage ? "btn btn-danger" : "btn btn-success"}
                type="button"
                onClick={onLogoButtonClick}
              >
                {showImage ? "Ukryj" : "Pokaż"} logo
              </button>
            </th>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Czas trwania</th>
            <th>Cena</th>
            <th>Ocena</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                    {showImage && (
                  <img
                    className="logo"
                    src={course.logoUrl}
                    alt={course.name}
                  />
                  )}
                </td>
                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{course.duration}</td>
                <td>{course.price} PLN</td>
                <td>{course.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;

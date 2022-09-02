import React from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "../api/coursesApi";
import Star from "./Star";
import { useSelector } from "react-redux";

export default function CourseDetails() {
    const { id } = useParams();
    // const [ course, setCourse ] = useState({});
    //bo course jest obiektem wiec zeby zainicjalizowac 
    const course = useSelector(({courses}) =>{
      return courses.data.find(course => {
        return course.id === +id;
      });
    });

    // useEffect(() => {
    //     getCourseById(id).then((_course) => {
    //         // setCourse(_course);
    //     });
    // }, [id])

    return (
        <div className="card">
      <h5 className="card-header">{'Informacje o kursie: ' + course.name }</h5>
      <div className="card-body">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3 text-left">Nazwa:</div>
              <div className="col-md-6 text-left">{course.name}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Kategoria:</div>
              <div className="col-md-6 text-left">{course.category}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Czas trwania:</div>
              <div className="col-md-6 text-left">{course.duration}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Opis:</div>
              <div className="col-md-6 text-left">{course.description}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Cena:</div>
              <div className="col-md-6 text-left">{course.price}</div>
            </div>
            <div className="row">
              <div className="col-md-3 text-left">Ocena:</div>
              <div className="col-md-6 text-left"><Star rating={course.rating} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-responsive"
              style={{ width: 200, margin: 2 }}
              title={course.name}
              alt={course.name}
              src={course.logoUrl}
            />
          </div>
        </div>
      </div>
      </div>
      <div className="card-footer">
        <Link type="button" className="btn btn-outline-secondary" to="/">
          <i className="fa fa-chevron-left"></i> Powrót
        </Link>
        <Link
          type="button"
          className="btn btn-outline-success mx-3"
          to={"/course-form/" + course.id}
        >
          Edycja kursu
        </Link>
      </div>
    </div>
    );
}
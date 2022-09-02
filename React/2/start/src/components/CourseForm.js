import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../api/categoryApi";
import { getCourseById } from "../api/coursesApi";
import Input from "./commons/Input";
import Select from "./commons/Select";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { saveCourse } from "../redux/actions/courseActions";

export default function CourseForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
  const [course, setCourse] = useState({
    id: null,
    name: "",
    category: "",
    price: 0,
    duration: 0,
    description: "",
    rating: 0,
    logoUrl: "",
    active: false,
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    getCategories().then(_categories=> {
        setCategories(_categories);
    });
  }, []);

  useEffect(()=> {
    if(id) {
        getCourseById(id).then(_course=> {
            setCourse(_course);
        })
    }
  })

  // function onNameChange(event) {
  //     const updatedCourse = {...course, [event.target.name]: event.target.value};
  //     setCourse(updatedCourse);
  // }
  function handleChange(event) {
    let value;
    switch (event.target.type) {
      case "checkbox":
        value = event.target.checked;
        break;
      default:
        value = event.target.value;
        break;
    }
    const updatedCourse = { ...course, [event.target.name]: value };
    handleValidationErrors();
    setCourse(updatedCourse);
  }

  function handleValidationErrors() {
    const _errors = {};
    if(!course.name) _errors.name = "Nazwa kursu jest wymagana";
        if (!course.category) _errors.team = "Kategoria kursu jest wymagana";
        if (course.price < 0)
          _errors.price = "Cena kursu nie może być mniejsza niż 0";
        if (course.rating < 0 || course.rating > 5)
          _errors.rating =
            "Ocena kursu nie może być mniejsza niż 0 i większa niż 5";
        setErrors(_errors);
        return Object.keys(_errors).length > 0;
  }

  function handleBlur(event) {
    handleValidationErrors();
    setTouched({...touched, [event.target.name]: true});
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(handleValidationErrors()) {
        return;
    }
    dispatch(saveCourse(course)).then(() => {  
        toast.success("Kurs zapisany!");
        navigate("/");
    });
  }

  function onCancelButtonClick() {
    id ? navigate("/course-details" + id) : navigate("/");
  }


  return (
    <div className="card">
      <div className="card-header">Dodawanie kursu</div>
      <div className="card-body container">
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            label="Nazwa"
            value={course.name}
            onChange={handleChange}
            type="text"
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />


        <Select
        id="category"
        name="category"
        label="Kategoria"
        onChange={handleChange}
        value={course.category}
        error={errors.category}
        onBlur={handleBlur}
        touched={touched.category}
        options={categories}
        />

          <Input
            id="price"
            name="price"
            label="Cena"
            value={course.price}
            onChange={handleChange}
            type="number"
            onBlur={handleBlur}
            error={errors.price}
            touched={touched.price}
          />

          <Input
            id="duration"
            name="duration"
            label="czas trwania"
            value={course.duration}
            onChange={handleChange}
            type="number"
            onBlur={handleBlur}
            error={errors.duration}
            touched={touched.duration}
          />

          <Input
            id="rating"
            name="rating"
            label="ocena"
            value={course.rating}
            onChange={handleChange}
            type="number"
            onBlur={handleBlur}
            error={errors.rating}
            touched={touched.rating}
          />
          
          <div className="mb-3">
            <label htmlFor="description">Opis</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={course.description}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="active"
              name="active"
              checked={course.active}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="active">
              Aktywny
            </label>
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Zapisz
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancelButtonClick}>
            Anuluj
          </button>
        </form>
      </div>
    </div>
  );
}

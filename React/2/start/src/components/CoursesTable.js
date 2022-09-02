import { useEffect } from "react";
import { deleteCourse } from "../api/coursesApi";
import "../styles/logo.css";
import "../styles/buttons.css";
import Star from "../components/Star";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadCourses, toggleShowImage } from "../redux/actions/courseActions";


const CoursesTable = () => {
  const dispatch = useDispatch();
  // const [courses, setCourses] = useState([]);
  // const [showImage, setShowImage] = useState(false);
  const showImage = useSelector(({courses}) => courses.showImage);
  const courses = useSelector(({courses})=> courses.data);

  useEffect(() => {
    getCoursesList();
  }, []);

  function onLogoButtonClick() {
    dispatch(toggleShowImage());
    // setShowImage(!showImage);
  }

  function onStarRatingClicked(rating) {
    console.log(`Star został kliknięty z warrtością ${rating}`);
  }

  function getCoursesList() {
    dispatch(loadCourses());
    // getCourses().then((_courses) => {
    //   setCourses(_courses);
    // });
  }

  function deleteCourseById(courseId) {
    deleteCourse(courseId).then(() => {
     getCoursesList();
    });
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button
                className={
                  showImage ? "center btn btn-danger" : "center btn btn-success"
                }
                type="button"
                onClick={onLogoButtonClick}
              >
                {showImage ? "Ukryj" : "Pokaż"} logo
              </button>
            </th>
            <th>Nazwa</th>
            <th>Kategoria</th>
            <th>Cena</th>
            <th>Czas trwania</th>
            <th>Ocena</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  {showImage && (
                    <img
                      className="logo center"
                      src={course.logoUrl}
                      alt={course.name}
                    />
                  )}
                </td>
                <td><Link to={"/course-details/" + course.id }>{course.name}</Link></td>
                <td>{course.category}</td>
                <td>{course.price} PLN</td>
                <td>{course.duration}</td>
                <td>
                  <Star rating ={course.rating} 
                  onClicked={(rating) => onStarRatingClicked(rating)} />
                  </td>
                  <td>
                  <span
                    className="fas fa-times delete"
                    onClick={() => deleteCourseById(course.id)}
                  ></span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;

import React from "react";
import CourseList from "./CoursesList";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import CourseDetails from "./CourseDetails";
import CourseForm from "./CourseForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


class App extends React.Component {
  render() {
    return (
      <>
      <ToastContainer autoClose={3000} />
      <NavBar />
      <Routes> 
        <Route path="/" element={<CourseList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/course-form">
        <Route path="/course-form">
            <Route path=":id" element={<CourseForm />} />
            <Route path="" element={<CourseForm />} />
          </Route>

        </Route>
    
        <Route path="/course-form" element={<CourseForm /> } />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </>
    );
  }
}

export default App;

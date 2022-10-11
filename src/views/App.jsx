import React from "react";
import { useState } from "react";
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/style.css";
import 'animate.css';
import courses from "../data/data.js";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";

export const App = () => {
  const [count, setCount] = useState(0);
  const [cat, setCat] = useState("");

  useEffect(() => {
    setCount(filteredCourses(cat).length);
  }, [cat]);

  const filteredCourses = (c) => {
    if (c.length === 0 || c === "Todo") return courses;
    return courses.filter((c) => c.category === cat);
  };

  return (
    <div className="container mt-2 min-vh-100">
      <Header />
      <NavBar courses={courses} setCat={setCat} count={count}/>
      <div className="row bg-body h-100 p-2 pt-5 animate__animated animate__fadeIn">
        <div className="col-12 d-flex justify-content-between flex-wrap h-100">
          {filteredCourses(cat).map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import ads from "../assets/img/ads.png";
import hacking from "../assets/img/hacking.png";
import design from "../assets/img/design.png";
import code from "../assets/img/code.png";
import fotografía from "../assets/img/foto.png";
import { CourseDetailsModal } from "./CourseDetailsModal";
import { useState } from "react";

export const Card = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  const setImg = (c) => {
    switch (c) {
      case "Marketing":
        return ads;
      case "Programación":
        return code;
      case "Hacking":
        return hacking;
      case "Diseño":
        return design;
      case "Fotografía":
        return fotografía;
    }
  };

  return (
    <>
      {" "}
      <div className="card m-1 w-30">
        <img src={setImg(course.category)} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            En este curso aprenderás y practicarás sobre los conceptos de{" "}
            {course.title}
          </p>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => setShowModal(true)}
          >
            Ver detalles
          </button>
          {showModal ? (
            <CourseDetailsModal
              course={course}
              setImg={setImg}
              setShowModal={setShowModal}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

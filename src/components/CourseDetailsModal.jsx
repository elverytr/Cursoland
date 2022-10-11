import React, { useEffect } from "react";

export const CourseDetailsModal = ({ course, setImg, setShowModal }) => {
  let fade = "";

  return (
    <div className="modal-parent animate__animated animate__fadeIn">
      <div className="card w-30 p-3 animate__flipInY">
        <img src={setImg(course.category)} className="card-img-top w-100 rounded" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">
            En este curso aprenderás y practicarás sobre los conceptos de{" "}
            {course.title}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Categoría:</strong> {course.title}
          </li>
          <li className="list-group-item">
            <strong>Plataforma:</strong> {course.where}
          </li>
          <li className="list-group-item">
            <strong>Profesor:</strong> {course.educator}
          </li>
          <li className="list-group-item">
            <strong>Fecha:</strong> {course.date}
          </li>
        </ul>
        <div className="card-footer row">
          <div className="text-right modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
              <a href={course.url} target='_blank' className="btn btn-primary">
                Ir al curso
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

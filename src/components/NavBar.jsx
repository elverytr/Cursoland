import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ courses, setCat, count }) => {
  const categories = [...new Set(courses.map((c) => c.category))];

  const setCategory = ({ target }) => setCat(target.value);

  const logout = () => {
    localStorage.clear()
    window.location.href = window.location.href;
  }

  return (
    <div className="row bg-warning p-1 text-light">
      <div className="col-10">
        <div className="dropdown">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categoría
            </button>
            <ul
              className="dropdown-menu transparent-20"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <option
                  className="dropdown-item"
                  onClick={(x) => {
                    setCategory(x);
                  }}
                >
                  Todo
                </option>
                {categories.map((category) => (
                  <option
                    key={category}
                    className="dropdown-item"
                    onClick={(x) => {
                      setCategory(x);
                    }}
                  >
                    {category}
                  </option>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-2 d-flex justify-content-between align-items-center">
        <button className="btn btn-outline-danger" onClick={() => logout()}>Salir</button>
        <h5 href="google.com" className="text-light text-decoration-none">
          {count} Cursos
        </h5>
      </div>
    </div>
  );
};

import React from "react";
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/style.css";
import "animate.css";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { App } from "./App";

export const Register = ({ loggedUser, setLoggedUser }) => {
  if (loggedUser) return <App />;
  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        email: "miemail@gmail.com",
        password: "12345678",
      })
    );
    window.location.href = window.location.href;
  };

  return (
    <div className="container mt-2 min-vh-100">
      <Header />
      <div className="row form-parent bg-body text-light">
        <form className="w-40 bg-secondary p-5 rounded">
          <div className="h-100 text-center text-dark">
            <h5>Introduce tus datos para registrarte</h5>
            <hr />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="micorreo@domain.com"
              defaultValue="juanlopez@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="************"
              defaultValue="12345678"
            />
          </div>

          <div className="w-100 d-flex justify-content-between">
            <Link to="/login" className="btn btn-danger">
              Login
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submit}
              to="/Cursoland"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

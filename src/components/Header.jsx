import React from 'react'
import logo from "../assets/img/Cursoland.gif";

export const Header = () => {
  return (
    <div className="row p-3 text-light h-30 bg-danger">
    <div className="col-3 d-flex align-items-center d-flex justify-content-center">
      <img src={logo} alt="logo" className="w-75 rounded-circle" />
    </div>
    <div className="col-9 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-12 ">
          <div className="row">
            <h2 className="text-center">
              Consigue cursos gratuitos o a precios asequibles.
            </h2>
          </div>
          <div className="row text-center ">
            <h4 className="border border-warning rounded border-3 p-4 border-dashed">
              Tecnología, diseño, marketing, animación, programación, DevOps
              <br /> y mucho mas!
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

import React from "react";
import "../assets/styles/manual.css";

export const Manual = () => {
  return (
    <>
        <div className="front-page">
          <img className="logo" src='https://i.ibb.co/4T7BRbv/Cursoland.gif' />
        </div>
        <h1 className="title" >
          Manual de usuario de Cursoland
        </h1>
        <div className="section">
          <img src='https://i.ibb.co/dtfkQnG/login.png' alt="" className="cap" />
          <p className="description">
            Inicialmente debes ingresar a la dirección web:
            https://elverytr.github.io/Cursolandia/ , luego seguir los pasos a
            continuación.
            <br />
            Para ingresar deberás iniciar sesión siguiendo los siguientes pasos:
            <br />
            <br />
            1. Ingresar correo electrónico. <br />
            2. Ingresar contraseña (estos ya están agregados de forma estática
            al se un software de prueba). <br />
            3. Pulsar el botón Login. <br />
            <br />
            <br />
            Seguidamente verás la siguiente vista.
          </p>
          <img src='https://i.ibb.co/mXLm0mT/vista-1.png' alt="" className="cap" />
          <p className="description">
            En esta vista podrás navegar por el curso, adicionalmente tendrás
            unas opciones que se describen a continuación.
            <br />
            <br />
            1. Es una lista desplegable para filtrar los cursos que se mostrarán
            en base a su categoría. <br />
            2. Terminar sesión. <br />
            3. Conteo de cursos que están en la vista actual. <br />
            4. Lista de cursos.
            <br />
          </p>
          <img
            src='https://i.ibb.co/fx2YWGP/categorizado.png'
            alt=""
            className="cap"
          />
          <p className="description">
            En esta vista se aprecia un ejemplo del resultado al filtrar
            utilizando la lista desplegable de categorías
            <br />
            <br />
            1. Se seleccionó la categoría hacking
            <br />
          </p>
          <img
            src='https://i.ibb.co/rsRMk0D/vista-de-curso.png'
            alt=""
            className="cap"
          />
          <p className="description">
            Detalles de la vista del curso
            <br />
            <br />
            1. Imagen referente a la categoría del curso.
            <br />
            2. Detalles de la vulnerabilidad.
            <br />
            3. Puedes pulsar este botón para ver mas detalles sobre el curso.
            <br />
          </p>

          <img
            src='https://i.ibb.co/s1N92cG/vista-de-detalles.png'
            alt=""
            className="cap"
          />
          <p className="description">
            Esta es la vista detallada del curso
            <br />
            <br />
            1. Puedes pulsar este botón para cerrar la descripción y regresar a
            la lista de cursos..
            <br />
            2. Pulsar esta tecla te llevará directamente al sitio oficial donde
            está el curso..
            <br />
          </p>
        </div>
    </>
  );
};

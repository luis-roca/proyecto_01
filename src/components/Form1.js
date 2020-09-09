import React, { useState } from "react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";

const Form1 = () => {
  // valores iniciales del formulario
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    genero: "",
    codigo: 0,
    reingreso: "",
    fechaNacimiento: "",
    celular: 0,
    email: "",
    ciclo: "",
    carrera_id: "",
    expLab: "",
  });

  const {
    nombre,
    apellido,
    edad,
    genero,
    codigo,
    reingreso,
    fechaNacimiento,
    celular,
    carrera_id,
    email,
    ciclo,
    expLab,
  } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true,
    offset: -10,
  };

  return (
    <section className="row bg-light pb-4 mt-4">
      <div className="col-4">
        <form>
          <h6 className="fa fa-header h4">
            Formulario de Inscripción para: Consultor Voluntario de Campo
          </h6>
          <div className="form-group">
            <label htmlFor="">Nombres</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Apellidos</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={apellido}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Edad</label>
            <input
              type="number"
              className="form-control"
              name="edad"
              value={edad}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Género</label>
            <select
              className="form-control"
              name="genero"
              value={genero}
              onChange={handleChange}
            >
              <option value="">Seleccione Género</option>
              <option value="01">Masculino</option>
              <option value="02">Femenino</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Código Universitario</label>
            <input
              type="number"
              className="form-control"
              name="codigo"
              value={codigo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">¿Has estado en CEDICE antes?</label>
            <select
              className="form-control"
              name="reingreso"
              value={reingreso}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="01">Sí</option>
              <option value="02">No</option>
            </select>
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                scroller.scrollTo("formTwo", scrollType);
              }}
            >
              Siguiente
            </button>
          </div>
          <br />
          <br />
          <br />
          <Element name="formTwo">
            <div className="form-group">
              <label htmlFor="">Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="fechaNacimiento"
                value={fechaNacimiento}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Celular</label>
              <input
                type="number"
                className="form-control"
                name="celular"
                value={celular}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Carrera</label>
              <select
                className="form-control"
                name="carrera_id"
                value={carrera_id}
                onChange={handleChange}
              >
                <option value="">Elegir carrera</option>
                <option value="0">Elegir carrera</option>
                <option value="1">Administración</option>
                <option value="2">Contabilidad</option>
                <option value="3">Economía</option>
                <option value="4">Marketing</option>
                <option value="5">Negocios Internacionales</option>
                <option value="6">Comunicaciones</option>
                <option value="7">Derecho</option>
                <option value="8">Arquitectura</option>
                <option value="9">Ingeniería Civil</option>
                <option value="10">Ingeniería Industrial</option>
                <option value="11">Ingeniería de Sistemas</option>
                <option value="12">Psicología</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">¿Qué ciclo estás cursando actualmente?</label>
              <select
                className="custom-select"
                name="ciclo"
                value={ciclo}
                onChange={handleChange}
              >
                <option value="">Elegir ciclo</option>
                <option value="1">6</option>
                <option value="2">7</option>
                <option value="3">8</option>
                <option value="4">9</option>
                <option value="5">10</option>
                <option value="6">11</option>
                <option value="7">12</option>
                <option value="8">Egresado(a)</option>
                <option value="9">Bachiller</option>
                <option value="10">Titulado(a)</option>
                <option value="11">Maestría</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">
                ¿Tienes experiencia laboral relacionada al puesto?
              </label>
              <select
                className="form-control"
                name="expLab"
                value={expLab}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="01">Sí</option>
                <option value="02">No</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-primary " type="button">
                Siguiente
              </button>
            </div>
          </Element>
        </form>
      </div>
      <div className="col-5">
        <img src="./portada.jpg" alt="" />
      </div>
    </section>
  );
};

export default Form1;

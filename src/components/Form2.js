import React, { useState } from "react";
import { Element } from "react-scroll";

const Form2 = () => {
  const [form2, setForm2] = useState({
    fechaNacimiento: "",
    celular: 0,
    email: "",
    ciclo: "",
    carrera_id: "",
    expLab: "",
  });

  const { fechaNacimiento, celular, carrera_id, email, ciclo, expLab } = form2;

  const handleChange = (e) => {
    setForm2({
      ...form2,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="row bg-light">
      <div className="col-4">
        <Element name="formTwo">
          <form action="">
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
          </form>
        </Element>
      </div>
    </section>
  );
};

export default Form2;

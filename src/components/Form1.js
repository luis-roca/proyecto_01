import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import {
  getCamposLaborales,
  getCarreras,
  getCicloActual,
  postFormulario,
} from "../services/services";
import Swal from "sweetalert2";

const Form1 = () => {
  const { register, handleSubmit, errors } = useForm();

  // valores iniciales del formulario
  const [carreras, setCarreras] = useState([]);
  const [cicloActual, setCicloActual] = useState([]);
  const [campoLab, setCampoLab] = useState([]);
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
    expVol: "",
    nomOrg: "",
    infoOrg: "",
    posLab: "",
    campoLabUno_id: "",
    campoLabDos_id: "",
    campoFunciones: "",
    desProfUno_id: "",
    desProfDos_id: "",
    vocDesarrollo: "",
    dispTardeNoche: "si",
    dispSabado: "si",
    dispCiclo: "si",
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
    expVol,
    nomOrg,
    infoOrg,
    posLab,
    campoLabUno_id,
    campoLabDos_id,
    campoFunciones,
    vocDesarrollo,
    desProfUno_id,
    desProfDos_id,
    dispTardeNoche,
    dispSabado,
    dispCiclo,
  } = form;

  useEffect(() => {
    getCarreras().then((arregloCarreras) => {
      console.log(arregloCarreras.data);
      setCarreras(arregloCarreras.data);
    });
  }, []);

  useEffect(() => {
    getCicloActual().then((arregloCicloActual) => {
      console.log(arregloCicloActual.data);
      setCicloActual(arregloCicloActual.data);
    });
  }, []);

  useEffect(() => {
    getCamposLaborales().then((arregloCamposLaborales) => {
      setCampoLab(arregloCamposLaborales.data);
    });
  }, []);

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

  // const handleSubmit = (e) => {
  const onSubmit = (e) => {
    // e.preventDefault();
    postFormulario(form).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 201) {
        setForm({
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
        Swal.fire({
          icon: "success",
          timer: 2500,
          title: "Creado!",
          text: "Registro creado correctamente",
          showConfirmButton: false,
        });
        return;
      }
    });
  };

  return (
    <section className="row bg-light pb-4 mt-4">
      <div className="col-4">
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
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
              ref={register({ required: true })}
            />
            {errors.nombre && (
              <div className="alert alert-danger" role="alert">
                Este campo es requerido
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Apellidos</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={apellido}
              onChange={handleChange}
              ref={register({ required: true })}
            />
            {errors.apellido && (
              <div className="alert alert-danger" role="alert">
                Este campo es requerido
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Edad</label>
            <input
              type="number"
              className="form-control"
              name="edad"
              value={edad}
              onChange={handleChange}
              ref={register({ required: true, min: 16, max: 50 })}
            />
            {errors.edad && (
              <div className="alert alert-danger" role="alert">
                Este campo es requerido
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Género</label>
            <select
              className="form-control"
              name="genero"
              value={genero}
              onChange={handleChange}
              ref={register({ required: true })}
            >
              <option value="">Seleccione Género</option>
              <option value="01">Masculino</option>
              <option value="02">Femenino</option>
            </select>
            {errors.genero && (
              <div className="alert alert-danger" role="alert">
                Este campo es requerido
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">Código Universitario</label>
            <input
              type="number"
              className="form-control"
              name="codigo"
              value={codigo}
              onChange={handleChange}
              ref={register({ required: true, maxLength: 8, minLength: 8 })}
            />
            {errors.codigo && errors.codigo.type === "minLength" && (
              <div className="alert alert-danger" role="alert">
                Este campo requiere 8 numeros
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">¿Has estado en CEDICE antes?</label>
            <select
              className="form-control"
              name="reingreso"
              value={reingreso}
              onChange={handleChange}
              ref={register({ required: true })}
            >
              <option value="">Seleccione</option>
              <option value="01">Sí</option>
              <option value="02">No</option>
            </select>
            {errors.reingreso && (
              <div className="alert alert-danger" role="alert">
                Este campo es requerido
              </div>
            )}
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
                ref={register({ required: true })}
              />
              {errors.fechaNacimiento && (
                <div className="alert alert-danger" role="alert">
                  Este campo es requerido
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Celular</label>
              <input
                type="number"
                className="form-control"
                name="celular"
                value={celular}
                onChange={handleChange}
                ref={register({ required: true, minLength: 9, maxLength: 9 })}
              />
              {errors.celular && errors.celular.type === "minLength" && (
                <div className="alert alert-danger" role="alert">
                  Este campo requiere 9 numeros
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
                ref={register({ required: true })}
              />
              {errors.email && (
                <div className="alert alert-danger" role="alert">
                  Este campo es requerido
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Carrera</label>
              <select
                className="form-control"
                name="carrera_id"
                value={carrera_id}
                onChange={handleChange}
                ref={register({ required: true })}
              >
                <option value="">Elegir carrera</option>
                {carreras.map((objCarrera) => {
                  return (
                    <option
                      key={objCarrera.carrera_id}
                      value={objCarrera.carrera_id}
                    >
                      {objCarrera.carrera_nombre}
                    </option>
                  );
                })}
              </select>
              {errors.carrera_id && (
                <div className="alert alert-danger" role="alert">
                  Este campo es requerido
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">¿Qué ciclo estás cursando actualmente?</label>
              <select
                className="custom-select"
                name="ciclo"
                value={ciclo}
                onChange={handleChange}
                ref={register({ required: true })}
              >
                <option value="">Elegir ciclo</option>
                {cicloActual.map((objCicloActual) => {
                  return (
                    <option
                      key={objCicloActual.ciclo_id}
                      value={objCicloActual.ciclo_id}
                    >
                      {objCicloActual.ciclo_nombre}
                    </option>
                  );
                })}
              </select>
              {errors.ciclo && (
                <div className="alert alert-danger" role="alert">
                  Este campo es requerido
                </div>
              )}
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
                ref={register({ required: true })}
              >
                <option value="">Seleccione</option>
                <option value="01">Sí</option>
                <option value="02">No</option>
              </select>
              {errors.expLab && (
                <div className="alert alert-danger" role="alert">
                  Este campo es requerido
                </div>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-primary " type="submit">
                Enviar Formulario
              </button>
            </div>
          </Element>

          <div className="form-group">
            <label htmlFor="">¿Tienes experiencia en voluntariados?</label>
            <select
              className="form-control"
              name="expVol"
              value={expVol}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="01">Sí</option>
              <option value="02">No</option>
            </select>
            {expVol === "01" && (
              <div className="form-group">
                <label htmlFor="">
                  Nombre de la organizacion/ Voluntariado que estuviste
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nomOrg"
                  value={nomOrg}
                  onChange={handleChange}
                />
              </div>
            )}
            {expVol === "01" && (
              <div className="form-group">
                <label htmlFor="">
                  ¿Actualmente cuál es tu posición laboral?
                </label>
                <select
                  className="form-control"
                  name="posLab"
                  value={posLab}
                  onChange={handleChange}
                >
                  <option value="">Seleccione</option>
                  <option value="01">Practicante Pre Profesional</option>
                  <option value="02">Practicante Profesional</option>
                  <option value="03">Otra...</option>
                </select>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="">
              ¿En qué campos tienes mayor experiencia laboral?
            </label>
            <select
              className="form-control"
              name="campoLabUno_id"
              value={campoLabUno_id}
              onChange={handleChange}
            >
              <option value="">Elegir</option>
              {/* {campoLabUno.map(({ campoLabUno_id, campoLaboral }) => { */}
              {campoLab.map((objCampoLab) => {
                return (
                  <option
                    key={objCampoLab.campoLab_id}
                    value={objCampoLab.campoLab_id}
                  >
                    {objCampoLab.campoLaboral}
                  </option>
                );
              })}
            </select>
            <br />
            <select
              className="form-control"
              name="campoLabDos_id"
              value={campoLabDos_id}
              onChange={handleChange}
            >
              <option value="">Elegir</option>
              {campoLab.map((objCampoLab) => {
                return (
                  <option
                    key={objCampoLab.campoLab_id}
                    value={objCampoLab.campoLab_id}
                  >
                    {objCampoLab.campoLaboral}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">
              Relacionado a tus áreas elegidos de la que tienes mas experiencia
              ¿Cuáles han sido tus funciones?
            </label>
            <textarea
              className="form-control"
              name="campoFunciones"
              value={campoFunciones}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="validationTooltip04">
              ¿En qué campos te gustaría desarrollarte más a lo largo de tu
              carrera profesional?
            </label>
            <small className="text-muted">Máximo 2 opciones</small>
            <select
              className="custom-select"
              id="validationTooltip04"
              // required
              name="desProfUno_id"
              value={desProfUno_id}
              onChange={handleChange}
            >
              <option value="">
                {" "}
                {/* Se borro eñl atributo selected  */}
                Elegir
              </option>
              {campoLab.map((objCampoLab) => {
                return (
                  <option
                    key={objCampoLab.campoLab_id}
                    value={objCampoLab.campoLab_id}
                  >
                    {objCampoLab.campoLaboral}
                  </option>
                );
              })}
            </select>
            <hr />
            <select
              className="custom-select"
              id="validationTooltip04"
              // required
              name="desProfDos_id"
              value={desProfDos_id}
              onChange={handleChange}
            >
              <option value="">
                {" "}
                {/* Se borro eñl atributo selected  */}
                Elegir
              </option>
              {campoLab.map((objCampoLab) => {
                return (
                  <option
                    key={objCampoLab.campoLab_id}
                    value={objCampoLab.campoLab_id}
                  >
                    {objCampoLab.campoLaboral}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Relacionado a tus áreas elegidas en la pregunta anterior, ¿Por qué
              te gustaría desarrollarte en esas?
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              name="vocDesarrollo"
              value={vocDesarrollo}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">
              ¿Tienes disponibilidad en la tarde noche en la semana para
              analizar información, avanzar pendientes y reunirte con tu equipo?
            </label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dispTardeNoche"
                id="dispTardeAfirmativo"
                value="si"
                checked={dispTardeNoche === "si"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="dispTardeAfirmativo">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dispTardeNoche"
                id="dispTardeNegativo"
                value="no"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="dispTardeNegativo">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">
              ¿Tienes disponibilidad de tiempo los sábados de 3 pm a 6 pm para
              reunirse con el empresario y el equipo de Consultores?
            </label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dispSabado"
                id="dispSabadoAfirmativo"
                value="si"
                checked={dispSabado === "si"}
                onChange={handleChange}
              />
              <label
                className="form-check-label"
                htmlFor="dispSabadoAfirmativo"
              >
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dispSabado"
                id="dispSabadoNegativo"
                value="no"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="dispSabadoNegativo">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">
              ¿Tienes disponibilidad para estar de Agosto a diciembre del 2020?
            </label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dispCiclo"
                id="dispCicloAfirmativo"
                value="si"
                checked={dispCiclo === "si"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="dispCicloAfirmativo">
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="dispCiclo"
                id="dispCicloNegativo"
                value="no"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="dispCicloNegativo">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputCV">Adjuntar CV</label>
            <input type="file" className="form-control-file" id="inputCV" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary align-center" type="submit">
              Enviar Formulario
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form1;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCamposLaborales } from "../services/services";

const Form3 = () => {
  const [campoLabUno, setCampoLabUno] = useState([]);
  const [campoLabDos, setCampoLabDos] = useState([]);
  const [form3, setForm3] = useState({
    expVol: "",
    nomOrg: "",
    infoOrg: "",
    posLab: "",
    campoLabUno_id: "",
    campoLabDos_id: "",
    campoFunciones: "",
  });

  const {
    expVol,
    nomOrg,
    infoOrg,
    posLab,
    campoLabUno_id,
    campoLabDos_id,
    campoFunciones,
  } = form3;

  useEffect(() => {
    getCamposLaborales().then((arregloCamposLaborales) => {
      setCampoLabUno(arregloCamposLaborales);
      setCampoLabDos(arregloCamposLaborales);
    });
  }, []);

  const handleChange = (e) => {
    setForm3({
      ...form3,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="row bg-light">
      <div className="col-4">
        <form action="">
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
          </div>
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
          <div className="form-group">
            <label htmlFor="">
              Explícanos brevemente sobre la organización que estuviste y el rol
              que desempeñaste
            </label>
            <textarea
              className="form-control"
              name="infoOrg"
              value={infoOrg}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">¿Actualmente cuál es tu posición laboral?</label>
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
              {campoLabUno.map(({ campoLabUno_id, campoLaboral }) => {
                return (
                  <option key={campoLabUno_id} value={campoLabUno_id}>
                    {campoLaboral}
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
              {campoLabDos.map(({ campoLabDos_id, campoLaboral }) => {
                return (
                  <option key={campoLabDos_id} value={campoLabDos_id}>
                    {campoLaboral}
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
            <select className="custom-select" id="validationTooltip04" required>
              <option value="0">Elegir</option>
              <option value="1">Desarrollo y Nuevas Tecnologías</option>
              <option value="2">Control de Riesgos</option>
              <option value="3">Programación</option>
              <option value="4">Científico de Datos (Data Scientist)</option>
              <option value="5">Posicionamiento SEO</option>
              <option value="6">Marketing Estratégico</option>
              <option value="7">Marketing Digital</option>
              <option value="8">Gestor de Contenido (Content Manager)</option>
              <option value="9">
                Gestor de Medios Sociales (Social Media Manager)
              </option>
              <option value="10">Diseño Gráfico</option>
              <option value="11">Creador de Contenido</option>
              <option value="12">
                Gestor de Eventos y Relaciones Públicas
              </option>
              <option value="13">Comercialización o Ventas</option>
              <option value="14">Finanzas Corporativas</option>
              <option value="15">Inversiones</option>
              <option value="16">Contraloría</option>
              <option value="17">Tesorería</option>
              <option value="18">Contabilidad Financiera</option>
              <option value="19">Contabilidad Fiscal</option>
              <option value="20">Legal Tributario</option>
              <option value="21">Legal Laboral</option>
              <option value="22">
                Administrativa (Oficinista o Gerencial)
              </option>
              <option value="23">Reclutamiento y Selección</option>
              <option value="24">Evaluación de Desempeño</option>
              <option value="25">Clima y Cultura</option>
              <option value="26">Compensaciones</option>
              <option value="27">Logística</option>
              <option value="28">Producción u Operaciones</option>
              <option value="29">Procesos</option>
              <option value="30">Proyectos</option>
              <option value="31">Gestión de Calidad</option>
              <option value="32">Sistemas</option>
              <option value="33">Psicología Clínica</option>
              <option value="34">Psicología Educativa</option>
              <option value="35">Psicología Social</option>
            </select>
            <hr />
            <select className="custom-select" id="validationTooltip04" required>
              <option value="0" selected>
                Elegir
              </option>
              <option value="1">Desarrollo y Nuevas Tecnologías</option>
              <option value="2">Control de Riesgos</option>
              <option value="3">Programación</option>
              <option value="4">Científico de Datos (Data Scientist)</option>
              <option value="5">Posicionamiento SEO</option>
              <option value="6">Marketing Estratégico</option>
              <option value="7">Marketing Digital</option>
              <option value="8">Gestor de Contenido (Content Manager)</option>
              <option value="9">
                Gestor de Medios Sociales (Social Media Manager)
              </option>
              <option value="10">Diseño Gráfico</option>
              <option value="11">Creador de Contenido</option>
              <option value="12">
                Gestor de Eventos y Relaciones Públicas
              </option>
              <option value="13">Comercialización o Ventas</option>
              <option value="14">Finanzas Corporativas</option>
              <option value="15">Inversiones</option>
              <option value="16">Contraloría</option>
              <option value="17">Tesorería</option>
              <option value="18">Contabilidad Financiera</option>
              <option value="19">Contabilidad Fiscal</option>
              <option value="20">Legal Tributario</option>
              <option value="21">Legal Laboral</option>
              <option value="22">
                Administrativa (Oficinista o Gerencial)
              </option>
              <option value="23">Reclutamiento y Selección</option>
              <option value="24">Evaluación de Desempeño</option>
              <option value="25">Clima y Cultura</option>
              <option value="26">Compensaciones</option>
              <option value="27">Logística</option>
              <option value="28">Producción u Operaciones</option>
              <option value="29">Procesos</option>
              <option value="30">Proyectos</option>
              <option value="31">Gestión de Calidad</option>
              <option value="32">Sistemas</option>
              <option value="33">Psicología Clínica</option>
              <option value="34">Psicología Educativa</option>
              <option value="35">Psicología Social</option>
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
                name="disponibilidadTardeNoche"
                id="inputDisponibilidadTardeNocheSi"
                checked
              />
              <label
                className="form-check-label"
                htmlFor="inputDisponibilidadTardeNocheSi"
              >
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="disponibilidadTardeNoche"
                id="inputDisponibilidadTardeNocheNo"
              />
              <label
                className="form-check-label"
                htmlFor="inputDisponibilidadTardeNocheNo"
              >
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
                name="disponibilidadSabado"
                id="inputDisponibilidadSabadoSi"
                checked
              />
              <label
                className="form-check-label"
                htmlFor="inputDisponibilidadSabadoSi"
              >
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="disponibilidadSabado"
                id="inputDisponibilidadSabadoNo"
              />
              <label
                className="form-check-label"
                htmlFor="inputDisponibilidadSabadoNo"
              >
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
                name="disponibilidadCiclo"
                id="inputDisponibilidadCicloSi"
                value="option1"
                checked
              />
              <label
                className="form-check-label"
                htmlFor="inputDisponibilidadCicloSi"
              >
                Si
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="disponibilidadCiclo"
                id="inputDisponibilidadCicloNo"
                value="option2"
              />
              <label
                className="form-check-label"
                htmlFor="inputDisponibilidadCicloNo"
              >
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

export default Form3;

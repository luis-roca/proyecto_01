import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCamposLaborales } from "../services/services";

const Form3 = () => {
  const [campoLab, setCampoLab] = useState([]);
  const [form3, setForm3] = useState({
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
  } = form3;

  useEffect(() => {
    getCamposLaborales().then((arregloCamposLaborales) => {
      setCampoLab(arregloCamposLaborales.data);
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

export default Form3;

import React, { Component } from "react";

class NuevaCita extends Component {
  state = {
    cita: {
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    }
  };

  handleChange = e => {
    console.log(e.target.name + ": " + e.target.value);
  };
  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          <form action="">
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Nombre de la mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la mascota"
                  name="mascota"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Nonbre del dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la mascota"
                  name="propietario"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4">
                <input type="date" className="form-control" name="fecha" />
              </div>

              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" name="hora" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los Sintomas"
                ></textarea>
              </div>
            </div>

            <input
              type="text"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;

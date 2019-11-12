import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCita from "./components/ListaCitas";
class App extends Component {
  state = {
    citas: []
  };

  crearNuevaCita = datos => {
    /* Copiar el state actual */
    const citas = [...this.state.citas, datos];

    /* agregar el nuevo state */
    this.setState({
      citas
    })
  };
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de Pacientes - Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />

          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCita 
              citas={this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

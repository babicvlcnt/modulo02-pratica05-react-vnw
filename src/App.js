import img from "./assets/chopper.webp";
import React, { Component } from "react";
class Test extends Component {
  state = {
    personagens: [
      {
        nome: "Luffy",
        idade: 17
      },
      {
        nome: "Chopper",
        idade: 15
      },
      {
        nome: "Zoro",
        idade: 19
      },
      {
        nome: "Usopp",
        idade: 17
      },
      {
        nome: "Nami",
        idade: 17
      },
      {
        nome: "Sanji",
        idade: 19
      }
    ]
  };
  render() {
    return (
      <div className="bio">
        <img
          src={img}
          alt="tony tony chopper segurando sua malinha de primeiros socorros"
        />
        <h1>Estes são alguns personagens do anime/manga One Piece.</h1>
        {this.state.personagens.map((item) => (
          <ul>
            <li>{item.nome}</li>
          </ul>
        ))}
      </div>
    );
  }
}
export default Test;

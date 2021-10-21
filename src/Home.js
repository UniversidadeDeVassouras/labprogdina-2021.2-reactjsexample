import { Component } from "react";
import Cabecalho from "./Header";
import './Home.css'
import Rodape from "./Rodape";

export default class Home extends Component {

    cliqueBotao = () => {
        console.log("Clique do botão na home");
    }

    render() {
        var tituloPagina = "Home";
        return (
            <article>
                <Cabecalho titulo={tituloPagina} cliqueBotao={this.cliqueBotao}/>
                <section>
                    <p>Esse é meu primeiro projeto react</p>
                    <a href="/sobre">Sobre</a>
                </section>
                <Rodape />
            </article>
        );
    }

}
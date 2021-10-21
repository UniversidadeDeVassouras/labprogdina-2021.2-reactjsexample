
//props são readonly
//Os dados fluem sempre de cima para baixo, ou seja, sempre do pai para o filho.
function Cabecalho(props) {
    return (
        <header>
            <h1>{props.titulo}</h1>
            <h2>6º Período Eng Software</h2>
            <button onClick={props.cliqueBotao} >Invocando o pai</button>
        </header>
    );
}

/*

const Cabecalho = ({titulo}) => <h1>{titulo}</h1>

class Cabecalho extends Component {

    constructor(props) {
        super(props);
        //...
    }

    shouldComponentUpdate() 
    {

    }

    render() {
        return (
            <header>
                <h1>{this.props.titulo}</h1>
                <h2>6º Período Eng Software</h2>
            </header>
        );
        
    }

}

*/

export default Cabecalho;
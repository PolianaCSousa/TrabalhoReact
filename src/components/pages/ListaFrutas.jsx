import { useState } from "react";

function ListaFrutas (props){
    const [frutaSelecionada, setFrutaSelecionada] = useState("");
    const [novaFruta, setNovaFruta] = useState("");
    const [frutas, setFrutas] = useState([
                                  
                                ]);

    const SelecionaFruta = (event) => {
        setFrutaSelecionada(event.target.value);
    };
    
    const AdicionaNovaFruta = () => {
        if (novaFruta.trim() !== "") {
            setFrutas([...frutas, novaFruta]);
            setNovaFruta("");
        }
    };

    const mostrarAlertaFrutaSelecionada = () => {
        alert(`Fruta selecionada: ${frutaSelecionada}`);
    };

    return (
        <div>
            <h1>Lista de frutas</h1>
            <label htmlFor="frutas">Selecione uma fruta:</label>
            <select id="frutas" value={frutaSelecionada} onChange={SelecionaFruta}>
                <option value="">Selecione uma opção</option>
                { frutas.map((fruta) => (
                    <option key={fruta} value={fruta}> {fruta} </option>
                ))}
            </select> 
            <button onClick={mostrarAlertaFrutaSelecionada}>Mostrar fruta selecionada</button><br />      
            <label htmlFor="nova-fruta">Adicionar nova fruta:</label>
            <input
            type="text"
            id="nova-fruta"
            value={novaFruta}
            onChange={(event) => setNovaFruta(event.target.value)}
            />
            <button onClick={AdicionaNovaFruta}>Adicionar</button>
            <ul>
                {frutas.map((fruta) => (
                    <li key={fruta}>{fruta}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaFrutas
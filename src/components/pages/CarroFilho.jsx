import { useState } from "react";
import Carro from "./Carro";

function CarroFilho(){
    const [carro, setCarro] = useState('');
    const [carros, setCarros] = useState([]);
    const [foto, setFoto] = useState('')
    const [alerta, setAlerta] = useState('')
    const adicionarCarro = (e) => { //qual evento está sendo passado como argumento?
      setCarros([...carros, carro]);
      setCarro('');
  
    };
    function removerCarro (){
        console.log(carros)
        const removeCarro = [...carros]
        const removeCarro2 = [...carros]

        let num = removeCarro2.splice(removeCarro.indexOf(carro), 1)
        if(num == carro){
        console.log('numero', num)
        removeCarro.splice(removeCarro.indexOf(num), 1)
            setCarros(removeCarro)
        }      
        console.log('fim', carros)
    }
    
    var ferrari = {
      dados: ['Ferrari ', 2020], img:"src/imgCarros/ferrari.jpg", ano: 2020
    }
    var uno = {
    dados: ['Uno ', 2012], img: "src/imgCarros/uno.jpg", ano: 2012
    }
    var kombi = {
        dados: ['Kombi ', 1978], img: "src/imgCarros/kombi.jpg", ano: 1978
    }
    var jeep = {
        dados: ['Jeep ', 2018], img: "src/imgCarros/jeep.jpg", ano: 2018
    }
    return(
        <div>  
            <div className="carro-atual">
                <img src={foto} onClick={()=>{ alert(`Este ${alerta[0]} é um modelo ${alerta[1]}`) }}></img><br/>
                
                <button onClick={()=>{setFoto(ferrari.img), setAlerta(ferrari.dados)}}> Anterior </button>
                <button onClick={()=>{setFoto(uno.img), setAlerta(uno.dados)}}> Proximo </button>
                <ul>
                {  carros.map((carro, index) => (
                    <button key={index} onClick={()=>{ setAlerta(carro)}}> {carro} </button>
                ))}
                </ul> 
            </div>
            <br/><input type="text" value={carro} onChange={(e) => {setCarro(e.target.value)}} placeholder='Digite o nome do carro' /><br/>
            <button onClick={adicionarCarro}>Adicionar Carro</button>
            <button onClick={removerCarro}>Remover Carro</button>
  
        </div>
    )
}

export default CarroFilho
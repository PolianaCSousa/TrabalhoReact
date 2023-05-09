import { useState } from 'react';


function Carro() {

    const styles = {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px'
    }

    const [carros, setCarros] = useState([{
      nome: 'Fusca', ano: 2015, img: 'src/images/fusca.jpg'
    },{
      nome: 'Jeep', ano: 2012, img: 'src/images/jeep.jpg'
  
    }
    ,{
      nome: 'Kombi', ano: 2011, img: 'src/images/kombi.jpg'
  
    },{
      nome: 'Ferrari', ano: 2009, img: 'src/images/ferrari.jpg'
  
    },{
      nome: 'Uno', ano: 1998, img: 'src/images/uno.jpg'
  
    }]);
  
    const adicionarCarro = (nome) => {
        const novoCarro = { nome };
        setCarros([...carros, novoCarro]);
      }
    
      const removerCarro = (nome) => {
        const carrosFiltrados = carros.filter(carro => carro.nome !== nome);
        setCarros(carrosFiltrados);
      }
    
      const [contador, setContador] = useState(0);
    
      const proximaImagem = () => {
        if(contador == 4){ setContador(0);}
        else setContador(contador + 1);
      }
    
      const imagemAnterior = () => {
        if(contador == 0){ setContador(4)}
        else setContador(contador - 1);
      }
      const alertaImagem = () =>{
        alert(`Este ${carros[contador].nome} é um modelo ${carros[contador].ano}`)
      }
      return (
        <div style={styles}>
          <p>Isso é um {carros[contador].nome}</p>
          <img src={carros[contador].img} onClick={alertaImagem}></img>
          <br/><br/><button onClick={imagemAnterior}>anterior</button>
          <button onClick={proximaImagem}>próximo</button>
          <h1>Lista de Carros</h1>
          <p>
            {carros.map(carro => <li key={carro.nome}>{carro.nome}</li>)}
          </p>
          <form onSubmit={(event) => {
            event.preventDefault();
            const nome = event.target.nome.value;
            adicionarCarro(nome);
            event.target.nome.value = '';
          }}>
            <label htmlFor="nome">Adicionar Carro:</label>
            <input type="text" id="nome" name="nome" />
            <button type="submit">Adicionar</button>
          </form>
          <form onSubmit={(event) => {
            event.preventDefault();
            const nome = event.target.nome.value;
            removerCarro(nome);
            event.target.nome.value = '';
          }}>
            <label htmlFor="nome">Remover Carro:</label>
            <input type="text" id="nome" name="nome" />
            <button type="submit">Remover</button>
          </form>
        </div>
      );
  }
  
  
  export default Carro
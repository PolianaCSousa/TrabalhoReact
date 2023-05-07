import { useState } from "react"
import Imagem from "./Imagem"
import foto1 from '../../img/1.jpg'
import foto2 from '../../img/2.jpg'
import foto3 from '../../img/3.jpg'
import foto4 from '../../img/4.jpg'
import foto5 from '../../img/5.jpg'
import foto6 from '../../img/6.jpg'


function Galeria (props){
    const [numImg, setNumImg] = useState(6)
    const [Imagens, setImagens] = useState([])

    function inserirImagem (){
        if(numImg >= 1 && numImg <= 6){
            setImagens([...Imagens, numImg])
        }
    }

    function removerImagem (){
        if(numImg >= 1 && numImg <= 6){
            const removeImagens = [...Imagens]
            removeImagens.splice(removeImagens.indexOf(numImg), 1)
            setImagens(removeImagens)
        }
    }

    function encontraImagem(imagem, index) {
        switch (imagem){
            case 1:
                return <li key={index}><img src={foto1} alt="Imagem 1"></img></li> 
            
            case 2:
                return <li key={index}><img src={foto2} alt="Imagem 1"></img></li>          
           
            case 3:
                return <li key={index}><img src={foto3} alt="Imagem 1"></img></li>            
       
            case 4:
                return <li key={index}><img src={foto4} alt="Imagem 1"></img></li> 
                      
            case 5:
                return <li key={index}><img src={foto5} alt="Imagem 1"></img></li> 
        
            case 6:
                return <li key={index}><img src={foto6} alt="Imagem 1"></img></li> 
        }
            
    }

    return(
        <>
         <div>
             <h1>{props.name}</h1>
         </div>
         <div>
             <p>A galeria de imagens possui 6 imagens. Insira um número de 1 a 6 para inserir ou deletar uma imagem:</p>
             <label>Imagem: <input type="number" value={numImg} onChange={(e) => {setNumImg(e.target.value)}}></input></label>
             <button type="button" onClick={inserirImagem}>Inserir</button>
             <button type="button" onClick={removerImagem}>Remover</button>
         </div>
         <div>
            <ul>
                {   
                    Imagens.map(encontraImagem)
                              
                }
                {Imagens.map((imagem, index) => (
               <li key={index}>{imagem}</li>
        ))}
            </ul>
            
         </div>
         
        </>
    )
}

export default Galeria
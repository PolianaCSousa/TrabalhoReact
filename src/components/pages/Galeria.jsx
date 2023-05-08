import { useState } from "react"

function Galeria (props){
    const [numImg, setNumImg] = useState(1)
    const [imagens, setImagens] = useState([])

    function inserirImagem (imagem){
        if(numImg >= 1 && numImg <=6){
            setImagens([...imagens, imagem]);
        }
    }

    function removerImagem (){
       
        if(numImg >= 1 && numImg <=6){
            const removeImagens = [...imagens]
            const removeImagens2 = [...imagens]

            let num = removeImagens2.splice(removeImagens.indexOf(`src/img/${numImg}.jpg`), 1)
            if(num == `src/img/${numImg}.jpg`){
                removeImagens.splice(removeImagens.indexOf(`src/img/${numImg}.jpg`), 1)
                setImagens(removeImagens)
            }             
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
             <button type="button" onClick={() => inserirImagem(`src/img/${numImg}.jpg`)}>Inserir</button>
             <button type="button" onClick={removerImagem}>Remover</button>
         </div>
         <div>
            <ul>
                {imagens.map((img, index) => (
                 <>
                    <li key={index}>
                        <img src={img} alt={`Image ${index}`}></img>
                        <p>Imagem {img}</p>
                    </li>
                 </>  
              ))}       
            </ul>  
         </div>  
        </>
    )
}

export default Galeria
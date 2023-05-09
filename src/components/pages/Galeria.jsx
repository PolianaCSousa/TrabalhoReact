import { useState } from "react"

function Galeria (props){

    

    const [numImg, setNumImg] = useState(1)
    const [imagens, setImagens] = useState([])
    const [nomeImagem, setNomeImagem] = useState([])

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

    function inserirNome(nome){
        if(numImg >= 1 && numImg <=6){
            setNomeImagem([...nomeImagem, nome]);

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
             <button type="button" onClick={() => {inserirImagem(`src/galeria/${numImg}.jpg`)
                                                    inserirNome(numImg)
                                                }}>Inserir</button>
             <button type="button" onClick={removerImagem}>Remover</button>
         </div>
         <div className="container">
            <div className="row">
                <div className="col-md-4">
                   
                    {imagens.map((img, index) => (
                        <>
                            <img key={index} src={img} alt={`Image ${index}`} className="img-fluid"></img>
                            <p>Imagem {nomeImagem[index]}</p>    
                        </>  
                    ))}       
                
                </div> 
            </div> 
         </div>  
        </>
    )
}

export default Galeria


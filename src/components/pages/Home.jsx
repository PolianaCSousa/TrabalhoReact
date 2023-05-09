import { text } from "@fortawesome/fontawesome-svg-core"

function Home (props){

    const styles = {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '60px', /* Altura do rodapé */
        backgroundColor: '#708090',
        fontSize: '14px',
        textAlign: 'center',
        padding: '13px',
        fontWeight: 'bold'
      }

    return(
        <> 
        <div>
            <h1>{props.name}</h1>
            <p >Bem vindo! Esta é a implementação do trabalho da disciplina de Desenvolvimento Front</p>
        </div>
        <footer style={styles}>Alunos: Leandro Marcos e Poliana Sousa</footer>
            
        </>
    )
}

export default Home
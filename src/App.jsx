import React,{useMemo,useCallback, useState} from  "react"

// Styles
import "./App.scss"

// Assets
import imgBiscoito from "./assets/biscoito.png"


function App() {

  const [currentSentence,setCurrentSentence ] = useState("Abra o biscoito e veja sua frase do dia")

  
const sentences = useMemo(() => {

 return  ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
  'O riso é a menor distância entre duas pessoas.', 
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.'];
}, [])

const OpenBiscuit = useCallback(()=>{
  let randomNumber = Math.floor(Math.random()* sentences.length)
  setCurrentSentence(sentences[randomNumber])

},[sentences])


  return (
    <div class="app__container">
      <img src={imgBiscoito} alt="biscoito " />
      <ButtonOpenBiscuit getSentence={OpenBiscuit} />
      <h3> {currentSentence}</h3>

    </div>
  );
}

const ButtonOpenBiscuit = (props) =>{

  const {getSentence} =props
  return(
      <div>
        <button onClick={getSentence}> Abrir Biscoito </button>
      </div>
  )
}


export default App;

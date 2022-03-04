import React, {Fragment, useState} from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import Paths from '../../Paths';
import UltimosResultados from "../ultimos_resultados/UltimosResultados";

function Start(){ 
    let [counter,setCounter] = useState();

     // Rota para pagina das questões e setar o número de questões a ser respondidas;
     let history = useHistory();

     const onQuestions = () => {  
        console.log('counter', counter);
        JSON.stringify(localStorage.setItem('counter', counter));
        if (localStorage.getItem('counter') === undefined || localStorage.getItem('counter') === 0){
            window.alert('Você não inseriu o número de questões que deseja responder')    
        }
        history.push(Paths.questions)
     }; 

     const cancel = () => {
        setCounter('');
     }
    

    return ( 
        <Fragment>
            <DivHeader>
                <DivTitulo> 
                    <h1>Aplicativo de Questionário </h1> 
                </DivTitulo>
                <DivDescription>
                    <h3> Venha aprender e se divertir com o aplicativo de perguntas sobre conhecimentos gerais! </h3>
                </DivDescription>
                <NumberQuestions>
                    <TitleChoiceQuestions>
                        <h3>Escolha o número de perguntas que deseja responder</h3>
                    </TitleChoiceQuestions>
                    
                        <DivInput>
                        Quantas perguntas deseja responder?
                        <InputQuestions value={counter} onChange={((e)=> setCounter(e.currentTarget.value))} type='number'  placeholder="Você pode escolher até 50 questões!"/> 
                        </DivInput>
                        
                        
                    <DivButtons>
                        <BTNStart 
                        onClick={() => onQuestions()}> 
                         Start 
                         </BTNStart>
                        <BTNCancel onClick={(()=> cancel())}> 
                            Cancel 
                        </BTNCancel>
                    </DivButtons>
                </NumberQuestions>
            </DivHeader>

            <TabelResults>
                <DivLastResults>
                    <h2> Seus últimos resultados </h2>
                    <UltimosResultados />
                </DivLastResults>
            </TabelResults>

        </Fragment>
    )
}

export default Start;


const DivHeader = styled.div`
display: flex;
color: white;
height: 280px;
width: 100%;
background: #294232;
flex-direction: column;
`
const DivTitulo = styled.div`
display: flex;
text-align: initial;
width: 65%;
height: 55%;
margin: 7px;
`

const DivDescription = styled.div`
display: flex;
width: 70%;
margin-top: -76px;
margin-left: 5px;
`

const NumberQuestions = styled.div`
flex-direction: column;
background: white;
color: black;
width: 90%;
height: 180px;
margin: auto;
margin-bottom: -80px;
border-radius: 26px;
border: solid 1px;
-webkit-box-pack: center;
justify-content: center;
`

const TitleChoiceQuestions = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
`

const DivInput = styled.div`
display: flex;
margin: 5px;
justify-content: flex-start;
`

const InputQuestions = styled.input`
width: 45%;
border-radius: 5px;
margin-left: 10px;
`

const DivButtons = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 15px;
`

const BTNStart = styled.button`
background: #294232;
color: White;
border: solid 1px;
border-radius: 5px;
height: 40px;
width: 30%;
cursor:pointer;
`

const BTNCancel = styled.button`
color: gray;
border: solid 1px;
border-radius: 5px;
height: 40px;
width: 30%;
cursor:pointer;
`

const TabelResults = styled.div`
display: flex;
margin-top: 100px;
margin-left: auto;
margin-right: auto;
width: 95%
justify-content: center;
`

const DivLastResults = styled.div`
text-align: center;
width: 95%
`
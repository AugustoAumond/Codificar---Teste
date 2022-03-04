import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Paths from "../../Paths";

function UltimosResultados(props){
    let [value, setValue] = useState();
    let [historic, setHistoric] = useState([]);
    console.log('value', value);

    //Resetando a pagina de entrada para atualizar após remover um item;
    const history = useHistory();
    const onStart = () => {
        history.push(Paths.start)}; 

    
    //Abrindo o histório quando voltar para a tela de entrada;
    useEffect (()=>{
        
       addHistoric();

    }, [])
    

     //Pegar o historico atual, o histórico completo, e tratar os dados setando na tela o histórico;
     const addHistoric = () => {
        const currentHistoric = JSON.parse(localStorage.getItem('currenthistoric'));
        let Allhistoric = JSON.parse(localStorage.getItem('historic'));
        if (Allhistoric !== undefined && currentHistoric === null) {
            Allhistoric = Allhistoric;        
        }
        else {
            if (Allhistoric === null){
                Allhistoric = [currentHistoric];
                localStorage.setItem('historic', JSON.stringify(Allhistoric));
            }else {
                Allhistoric.push(currentHistoric);
                console.log(Allhistoric, historic)
                JSON.stringify(localStorage.setItem('historic', JSON.stringify(Allhistoric)));
            }
        }
        setHistoric(JSON.parse(localStorage.getItem('historic')));
        localStorage.removeItem('currenthistoric');
        console.log('all', Allhistoric, historic);
        Div(historic);
     }

    // Função para remover algum histórico;
    const onRemove = (hist) => {
        let newHistoric = hist;
        newHistoric.map((e, index)=>{
            if (value===index){
                newHistoric.splice(index, 1);
                if (newHistoric === undefined){
                    document.querySelector('#remove').style.display = 'none;'
                }
            }                                    
        }) 
        setHistoric(newHistoric);  
        JSON.stringify(localStorage.setItem('historic', JSON.stringify(historic))); 
        setValue()
        onStart();   
    }


    // Mostrando na tela o histórico;
    function Div (historic){
         if (historic !== null){
            return (
                <Fragment >
                    {historic.map((event, index) => (
                    <DivHistoric key={index}>
                        <DivCheck type='radio' name={'check'} value={index} onChange={(e)=> setValue(index)} checked={value===index}/>
                        <Comment>
                            {Comments(event.number, event.hit)}
                        </Comment>
                        <HistoricDatas>
                            {event.hit} / {event.number}
                        </HistoricDatas>     
                    </DivHistoric> 
                    ))}
                    <Remove  onClick={(()=> onRemove(historic))}> Remover </Remove>
                </Fragment>       
            )
        } 
        else 
         return <Fragment> Não há histórico disponível no momento </Fragment>
    }

    //Comentário central baseado nos acertos do usuário;
    function Comments(number, hit){
        let result = (hit / number) * 10;
        if (result >= 8){
            return "Execelente Resultado! Você sabe tudo!"
        }   
        else if (result < 8 && result >= 6 ){
            return "Bom trabalho! Um pouco mais você chega a perfeição!"
        }
            else if ((result < 6)  &&  (result >= 4)){ 
                return "Você deu azar, as perguntas eram muito dificeis mesmo."
        }else {
            return "Acontece nas melhores famílias."   
        }
                
    }
    return (Div(historic))
}
    
export default UltimosResultados;

const DivHistoric = styled.div`
display: flex;
background: #294232;
border: solid;
height: 75px;
margin-left: 20px;
margin-top: 20px;
justify-content: space-evenly;
align-items: center;
`

const DivCheck = styled.input`
display: flex;
align-items: center;
justify-content: center;
`

const Comment = styled.div`
display: flex;
width: 75%;
align-items: center;
justify-content: center;
`

const HistoricDatas = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Remove = styled.button`
display: block;
color: white;
background: gray;
width: 120px;
height: 25px;
margin-top: 40px;
margin-left: 75%;
box-shadow: 3px 2px 5px 2px grey;
align-items: center;
justify-content: center;
align-content: center;
border: solid 1px;
cursor: pointer;
`
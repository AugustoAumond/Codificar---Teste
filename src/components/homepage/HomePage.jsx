import React, {Fragment} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Paths from '../../Paths';


function HomePage() {

  const history = useHistory();

  const onStart = () => {
    history.push(Paths.start)}; 

    return (
    <Fragment>
      <Body>
        <Title onClick={() => onStart()}> <h1> 
        Questionario App
           </h1> </Title>         
      </Body>
    </Fragment>  
  );
}
export default HomePage;

const Body = styled.div`
background: #294232;
`

const Title = styled.div`
display: flex;
color: white;
height: 100vh;
align-items: center;
justify-content: center;
cursor: pointer;
`


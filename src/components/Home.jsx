import React from 'react'
import styled from 'styled-components'
import {Android} from '../assets/Android.jsx'
import "@fontsource/inter"
import "@fontsource/alata"
import img1 from '../assets/img1.png'
import { Topbar } from './Topbar.jsx'
export const Home = () => {
  return (
    <Principal>
      <Topbar/>
      <Container>
        <Box1>
          <Text1 >
            Reserva hospedajes a tus Mascotas, en nuestra App.
          </Text1>
          <Text2>
            Encuentra el lugar perfecto para dejar a tu mascota. Unete a nosotros y descubre el mejor lugar para hospedar a tu mascota
          </Text2>
          <ButtonDown>
            <p style={{flex:1, textAlign:"center"}}>Descargar</p>
            <Android />
          </ButtonDown>
        </Box1>
        <div style={{width:"20%"}}></div>
        <img height="500" src={img1} style={{paddingBottom: "10%"}}/>
      </Container>
    </Principal>
  )
}

const Principal = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(311.76deg, #D0E5FF -12.2%, #D9EAFE 0.54%, #E4F0FE 2.5%, #FFFFFF 81.89%);
    //background-color: green;
`

const Container = styled.div`
    flex:1;
    //height: 80vh;
    //background: linear-gradient(311.76deg, #D0E5FF -12.2%, #D9EAFE 0.54%, #E4F0FE 2.5%, #FFFFFF 81.89%);
    //background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    //align-content: space-between;
    padding: 0 90px;
    flex-wrap: wrap;
    
`
const ButtonDown = styled.div`
    display: flex;
    width: 250px;
    flex-direction: row;
    box-shadow: 0px 7px 22px -6px rgba(33, 123, 244, 0.34);
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    color: #2782CA;
    font-family: 'Inter';
    font-weight: 600;
`
const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10%;
`

const Text1 = styled.p`
  color:#2782CA; 
  font-size:32px;
  width: 432px;
  font-weight: 600;
  font-family: "Inter";

`

const Text2 = styled.p`
  color:black;
  
  font-size: 1.2em;
  //font-size:24px;
  width: 471px;
  font-family: "Alata";
  font-weight: 500;
  font-style: normal;
  text-align: justify;

`
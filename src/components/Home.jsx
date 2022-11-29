import React from 'react'
import styled from 'styled-components'
import {Android} from '../assets/Android.jsx'
import "@fontsource/inter"
import "@fontsource/alata"
import img1 from '../assets/img1.png'
import { Topbar } from './Topbar.jsx'
import { useWindowDimensions } from "../hooks/Window.jsx";

//<div style={{width:"20%"}}></div>
export const Home = () => {
  // const downloadTxtFile =() =>{
  //    const element = document.createElement("a");
  //    element.href = "https://repetsapi-production.up.railway.app/repets-apk.apk"
  //    element.download = "100ideas-" + Date.now() + ".txt";
 
  //    // simulate link click
  //    document.body.appendChild(element); // Required for this to work in FireFox
  //    element.click();
  // }

  const { height, width } = useWindowDimensions();
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
            <a href='https://repetsapi-production.up.railway.app/repets-apk.apk' 
            style={{flex:1, textAlign:"center", color: '#2782CA', textDecoration:'none'}}>Descargar</a>
            <Android />
          </ButtonDown>
        </Box1>
        
        <Img1 src={img1} />
      </Container>
    </Principal>
  )
}

const Principal = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(311.76deg, #D0E5FF -12.2%, #D9EAFE 0.54%, #E4F0FE 2.5%, #FFFFFF 81.89%);
    box-sizing: border-box;
    padding: 20px;
    //background-color: green;
`

const Container = styled.div`
  
    flex:1;
    box-sizing: border-box;
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
    padding: 5px 20px;
    align-items: center;
    color: #2782CA;
    font-family: 'Inter';
    font-weight: 600;
    border-radius: 6px;
    :hover{
      background-color: #c5e5ff;
    }

`
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  //margin-bottom: 10%;
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
const Img1 = styled.img`
  //margin-bottom: 10%;
  @media (min-width: 1240px) {
    width: 25%;
    margin-left: 15%;
    
  }
  @media (max-width: 1240px) {
    width: 400px;
    margin-left: 15%;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`
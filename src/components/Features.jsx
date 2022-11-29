import React from 'react'
import styled from 'styled-components'
import {Img2} from '../assets/Img2.jsx'
import arnold from '../assets/arnold.jfif'
import chili from '../assets/chili.jfif'
import gab from '../assets/gab.webp'
import jeremy from '../assets/jeremy.jfif'
import {House,Chat,Map,App} from '../assets/Icons.jsx'
import "@fontsource/inter"
import "@fontsource/alata"
export const Features = () => {
  return (
    <Principal>
      <Text>Caracteristicas de RE-PETS</Text>
      <Box1>
        <Box0>
          <Box2>
            <Box3>
              <House/>
            </Box3>
            <Text2>Facilmente encontraras el hospedaje ideal para tus mascotas</Text2>
          </Box2>
          <div style={{height:"20%"}}></div>
          <Box2>
            <Box3>
              <Chat></Chat>
            </Box3>
            <Text2>Comunicacion rapida con el hospedador</Text2>
          </Box2>
        </Box0>
        <Img2 ></Img2>
        <Box0>
          <Box2>
            <Box3>
              <Map></Map>
            </Box3>
            
            <Text2>Visualizacion de los hospedajes en el mapa</Text2>
          </Box2>
          <div style={{height:"20%"}}></div>
          <Box2>
            <Box3>
              <App></App>
            </Box3>
            <Text2>App rapida y sencilla de entender </Text2>
          </Box2>
        </Box0>
      </Box1>
      <Text>Nuestro Equipo</Text>

      <Equipo>
        <Miembro>
          <Perfil src={gab}/>
          <Text3>Gabriel Tuco</Text3>

        </Miembro>
        <Miembro>
          <Perfil src={arnold}/>
          <Text3>Arnold Olanda</Text3>
        </Miembro>
        <Miembro>
          <Perfil src={chili}/>
          <Text3>Christian Chilli</Text3>
        </Miembro>
        <Miembro>
          <Perfil src={jeremy}/>
          <Text3>Jeremy Huaringa</Text3>
        </Miembro>
     
      </Equipo>
    </Principal>
  )
}
const Principal = styled.div`
  //background-color: green;
  padding: 0 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
    //background: linear-gradient(311.76deg, #D0E5FF -12.2%, #D9EAFE 0.54%, #E4F0FE 2.5%, #FFFFFF 81.89%);
    //background-color: green;
`

const Text = styled.p`
  color: #2782CA;
  font-size: 32px;
  font-family: 'Inter';
  font-weight: 600;
  margin-bottom: 0;
`

const Box0 = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Box1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
  width: 380px;
`

const Text2 = styled.p`
  font-family: "Alata";
  font-size: 20px;
  font-weight: 400;
  margin-left: 5px;
  //height: 55px;
  text-align: left;
`

const Text3 = styled.p`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  @media querys{
    
  }
`

const Box3 = styled.div`
  background-color: #2782CA;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 63px;
  width: 63px;
`

const Equipo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const Perfil =styled.img`
  width: 80%;
  border-radius: 14px;
`

const Miembro = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  width: 270px;
  border-radius: 14px;
  border: 1px solid #2782CA;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px;
  padding:  10px;
  box-sizing: border-box;
`
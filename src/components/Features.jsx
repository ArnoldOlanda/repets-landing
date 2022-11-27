import React from 'react'
import styled from 'styled-components'
import {Img2} from '../assets/Img2.jsx'
import {House,Chat,Map,App} from '../assets/Icons.jsx'
import "@fontsource/inter"
import "@fontsource/alata"
export const Features = () => {
  return (
    <Principal>
      <Text>Caracteristcas de RE-PETS</Text>
      <Box1>
        <Box0>
          <Box2>
            <Box3>
              <House/>
            </Box3>
            <Text2>Facilmente encontraras el hospedaje ideal para tu mascotas</Text2>
          </Box2>
          <div style={{height:"20%"}}></div>
          <Box2>
            <Box3>
              <Chat></Chat>
            </Box3>
            <Text2>Comunicacion rapida con el hospedador</Text2>
          </Box2>
        </Box0>
        <Img2></Img2>
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
          <Text3>Gabriel Tuco</Text3>

        </Miembro>
        <Miembro>
          <Text3>Arnold Olanda</Text3>
        </Miembro>
        <Miembro>
          <Text3>Christian Chilli</Text3>
        </Miembro>
        <Miembro>
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
  justify-content: space-between;
  flex-wrap: wrap;
`

const Box2 = styled.div`
  display: flex;
  flex-direction: row;

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
  font-size: 24px;
  font-weight: 600;
  margin-left: 5px;
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
  justify-content: space-between;
`
const Miembro = styled.div`
  width: 270px;
  height: 316px;
  border-radius: 14px;
  border: 1px solid #2782CA;
  display: flex;
  align-items: center;
  justify-content: center;
`

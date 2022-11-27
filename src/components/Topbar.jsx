import React from 'react'
import styled from 'styled-components'
import {Logo1} from '../assets/Logo1.jsx'
export const Topbar = () => {
  return (
    <Container>
      <Logo1></Logo1>
     
    </Container>
  )
}

const Container = styled.div`
    height: 122px;

    margin: 0 20px;
    //background-color: yellow;
    display: flex;
    
    //justify-content: center;
    align-items: center;
    border-bottom: solid #217cf43b;
`
import React, { Component } from 'react'
import styled from 'styled-components'
import backgroundColor from "./IMG/Combined Shape.png"

const HeaderWrapper=styled.header`
width: 85%;
height: 156px;
background-image:url(${backgroundColor});
display: flex;
align-items: center;
justify-content: center;
margin-right: auto;
margin-left: auto;

`
const HEADER =()=>{
return (
  <HeaderWrapper></HeaderWrapper>
)
}
export default HEADER
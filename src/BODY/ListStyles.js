import styled from "styled-components";
 export const Card=styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-right:auto;
 margin-left:auto;
 margin-top:25px;
width: 75%;
height: 152px;
background-color: lightgrey;
border: 2px solid grey;
box-shadow: 2px 5px 6px 8px orange;
`
export const IMG=styled.img` 
 width: 88px;
 height: 88px;
 border-radius:50%;
 margin-right:50px
 
 `
 export const LeftPart=styled.section`
 width: 50%;
 display: flex;
 align-items: center;
 margin-left:15px;
 /* justify-content: center; */
 `
export const InfoContainer=styled.div` 
display:flex;
align-items: left;
/* justify-content: center; */
flex-direction: column;
`
export const MainMajor=styled.div` 
display:flex;
text-align: left;
color: blue;
font-size: 20px;
`
export const Name=styled.h2` 
display:flex;
font-weight: bold;
color: Black;
`
export const GenInfoCon=styled.ul` 
display:flex;
align-items: center;
justify-content: space-between;
padding:0;
`
export const Span=styled.li`
display:flex;
color: black;
padding: 0 5px;
`


export const RightPart=styled.section`
display: flex;
`
export const Button=styled.button`
background-color: white;
color: darkgrey;
border: 2px solid orange;
border-radius:15px;
margin:0 5px;
:active{
    background-color: black;
}
`

import styled from "styled-components";
export const  APPJS =styled.main`
display: flex;
align-items: center;
justify-content: center;
`
export const TotalListsWrapper=styled.body`
width: 100%;
height: fit-content;

`

export const Card=styled.div`
@media (max-width:1100px){
    flex-direction: column;
    height: auto;
}
@media (max-width:700px){
    flex-direction: column;
    height: auto;
}
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-right:auto;
 margin-left:auto;
 margin-top:25px;
 padding:25px 0px;
width: 75%;
height: 125px;
background-color: lightgrey;
border: 2px solid grey;
box-shadow: 2px 5px 6px 8px lightblue;
`
export const IMG=styled.img` 
 width: 88px;
 height: 88px;
 border-radius:50%;
 margin-right:50px;
 @media (max-width:1100px){
margin-bottom:10px
 }
 @media (max-width:700px){
width:48px;
height: 48px;
float:left;
 }
 
 `
 export const LeftPart=styled.section`
 width: 50%;
 display: flex;
 align-items: center;
 margin-left:15px;
 /* justify-content: center; */
 @media (max-width:1100px){
    flex-direction: column;
    
 }
 @media (max-width:700px){
    flex-direction:column;
    
 }
 `
export const InfoContainer=styled.div` 
display:flex;
align-items: left;
flex-direction: column;
justify-content: space-around;
`
export const MainMajor=styled.div` 
display:flex;
text-align: left;
color: blue;
font-size: 20px;
@media (max-width:700px){
    font-size:13px;
}
`
export const Name=styled.h2` 
display:flex;
font-weight: bold;
color: Black;
@media (max-width:700px){
    font-size:15px;
    font-weight: 700;
}
`
export const GenInfoCon=styled.ul` 
display:flex;
align-items: center;
justify-content: space-between;
padding:0;
@media (max-width:700px){
    border-bottom:2px solid grey;
padding-bottom:9px;
width: 100%;
}

`
export const Span=styled.li`
display:flex;
color: black;
padding: 0 5px;
`


export const RightPart=styled.section`
display: flex;
@media (max-width:700px){
    flex-direction: row;
    flex-wrap:wrap;
    width:75%;
}
`
export const Button=styled.button`
background-color: lightblue;
color: blue;
font-weight: 700;
outline:0;
@media (max-width:700px){
    font-size:13px;
    background-color: green;
}
border: 0;
padding:3px 5px;
border-radius:5px;
margin:0 5px;
:active{
    background-color: black;
}
`

import React, { Component } from 'react'
import styled from 'styled-components'
import { totalInfo } from '../joblisting-source'
import { Card, IMG, InfoContainer, MainMajor,Name ,GenInfoCon,Span, LeftPart, RightPart, Button} from './ListStyles'


const totalListsWrapper=styled.body`
background-color: grey;
width: 75%;
height: fit-content;

`


const Lists_page=()=>{
    
    return (
        <totalListsWrapper>
    {totalInfo.map(item=>{
        return ( 
         <Card>
<LeftPart>
<IMG src='https://picsum.photos/40/32'/>
<InfoContainer>
<MainMajor>{item.major}</MainMajor>
<Name>{item.name}</Name>
<GenInfoCon>
    <Span>{item.when} ago</Span>
    <Span>{item.workTime} </Span>
    <Span>{item.where} </Span>
</GenInfoCon>
</InfoContainer>
</LeftPart>


<RightPart>
    <Button>{item.whatDoYouKnow.major}</Button>
    <Button>{item.whatDoYouKnow.level}</Button>
    {item.whatDoYouKnow.Knows.map(know=> <Button>{know}</Button>)}

</RightPart>
         </Card>
            )
    })}
        </totalListsWrapper>

    )
}
export default Lists_page
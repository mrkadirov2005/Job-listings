import React, { Component } from 'react'
import styled from 'styled-components'
import { totalInfo } from '../joblisting-source'
import { Card, IMG, InfoContainer, MainMajor,Name ,GenInfoCon,Span, LeftPart, RightPart, Button, TotalListsWrapper} from './ListStyles'





const Lists_page=()=>{
    
    return (
        <TotalListsWrapper>
    {totalInfo.map(item=>{
        return ( 
         <Card>
<LeftPart>
<IMG src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgjZTY99TvWntQACYWW6UQZoztrqGitesdw&usqp=CAU"/>
<InfoContainer>
<MainMajor>{item.major}
 {item.new? <Button style={{backgroundColor:"blue",color:"white",fontWeight:700}}>NEW!</Button>: ""}
 {item.featured?<Button style={{backgroundColor:'black',color:'white',fontWeight:700}}>Featured</Button>: "" }
 </MainMajor>
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
        </TotalListsWrapper>

    )
}
export default Lists_page
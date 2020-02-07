import React  from "react";
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {Container, Header, Form, Button, Message } from "semantic-ui-react";
import { Link, withRouter } from 'react-router-dom';
import DropdownSelection from "./DropDown";
import ButtonExampleSelection from './GigapenTbutton'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Nav = styled.nav`
box-shadow: 2px 2px 2px #888888;
background-color: #ADFFB5;
display: flex;
flex-direction: row;
flex-wrap; nowrap;
justify-content: flex-end;
align-items: baseline;
margin-bottom: 0px;
`

const A = styled.a`
color: palevioletred;
font-size: 1.2em;
`

const Buttn = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`
 const Imge = styled.img`
    width:35%;
    height:25%;
    margin-top:5%
 `

 const Sec = styled.section`
 background-image: url('https://cdn4.vectorstock.com/i/1000x1000/27/83/cartoon-seamless-nature-background-vector-12842783.jpg');
    width:100%;
    height:100%;
 `
 const HeaderSpace = styled.h2`
    color: palevioletred;
    margin-left:5%;
 `


 export default function GigaPen(){ 
    return(
     <div>
          <Nav>
        <Link to="/">
            <A>Home</A>
        </Link>
        <Link to="/profile">
            <Buttn>Profile</Buttn>
        </Link>
        </Nav>
        <Sec>
     <Container textAlign='center'>
         <HeaderSpace>Giga Pen!</HeaderSpace>
         <Imge src='https://png2.cleanpng.com/sh/a5a29449b3dbff914dea20d6bc315ef1/L0KzQYm3VcE1N6d4iZH0aYP2gLBuTfN2fF55gNc2cnBzdX65TgpmeKV0hNNrLXj4frj5mb1wdV5zh982NXHpcYS4UME1amQ2TqU3M0m0R4aBU8kyPWM7S6YAOUi4Q4GBTwBvbz==/kisspng-cut-the-rope-2-zeptolab-hungry-om-nom-5afa31014b3163.391758391526345985308.png'/>
         
     </Container>
     </Sec>
        <DropdownSelection/>
        <ButtonExampleSelection/>
     </div>
 

    
    )
 };


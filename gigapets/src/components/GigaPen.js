import React  from "react";
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {Container, Header, Form, Button, Message } from "semantic-ui-react";
import { Link, withRouter } from 'react-router-dom';
import DropdownSelection from "./DropDown";
import ButtonExampleSelection from './GigapenTbutton.js';
import Navigation from './Layout/Navigation';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

//const Nav = styled.nav`

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
   <Navigation/>
        <Sec>
     <Container textAlign='center'>
         <HeaderSpace>Giga Pen!</HeaderSpace>
         <Imge src='https://png2.cleanpng.com/sh/dae77817b2aef751a89f92f8fffbcdab/L0KzQYm3VcI1N5dwkpH0aYP2gLBuTfN2fF55gNc2cnBzdX65TgpmeKV0hNNrLX38PbF0Tf5wdV46eqICMkmzdIbrUPRiPF82TKs9MUS7QIK8UscyQWYASak8OEG1PsH1h5==/kisspng-cut-the-rope-2-zeptolab-my-om-nom-5b07290d5d0da4.1494148015271959173812.png'/>
         
     </Container>
     </Sec>
        <DropdownSelection/>
        <ButtonExampleSelection/>
     </div>
 

    
    )
 };

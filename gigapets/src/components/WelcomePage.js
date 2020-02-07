import React from "react";
import styled from 'styled-components';
import {Button} from "semantic-ui-react";
import { Link } from 'react-router-dom';

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
margin-bottom: 5%;
`

const A = styled.a`
color: palevioletred;
font-size: 1.2em;

`


const Imge= styled.img`
    margin-left:20%;

`

const Buttn = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`

export default function WelcomePage() {
    return (
      <section className="welcome-page">
        <Nav>
        <Link to="/gigapen">
            <A>GigaPen</A>
        </Link>
        <Link to="/login">
            <Buttn>Login/Sign-up</Buttn>
        </Link>
        </Nav>
        <header>
          <Title>Welcome to Gigapets! The educational nutritional Tool for kids!</Title>
          <Imge src="https://www.misskatecuttables.com/uploads/shopping_cart/8089/large_cute-monsters.png"/>
        </header>
      </section>
    )
  }

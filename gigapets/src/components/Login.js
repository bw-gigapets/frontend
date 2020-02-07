import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form, Button, Message } from "semantic-ui-react";
import { Link, withRouter } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { userLogin } from '../actions/user_actions';

export const Container = styled.div`
 margin-top: 5rem;
`


export const P = styled.p`
    margin: 1rem 0;
`

export const Content = styled.div `
display: flex;
justify-content: center;
flex-grow: 2;
flex-direction: column;
align-items: center;
padding-bottom: 45vh;
border: black solid 2px;
margin: auto;
padding-bottom: 4rem;
padding-top: 4rem;
width: 30%;
box-shadow: 12px 12px 2px 1px rgba(137, 196, 178);
`

export const Underlined = styled.span`
	text-decoration: underline
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
const Buttn = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`

const LoginForm = props => {
    const [userCredentials, setUser] = useState ({
        username: "",  password: "",
    })

    console.log(props.user)
    const changeHandler = event => {
        setUser({...userCredentials, [event.target.name] : event.target.value})
        console.log()
    }

    const size = ['large'];

    const axiosLogin = e => {
        e.preventDefault()
        props.userLogin(userCredentials)
        props.history.push('/profile')
      }
   
    
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

            <Container>
                <Content>
                <h1>Gigapets Login</h1>
            <Form size={size} key={size} onSubmit={axiosLogin}  >
           
            <Form.Field> 
                <label htmlFor="username">Username: </label>
                <input onChange={changeHandler} id="username" type="text" defaultValue={userLogin.username} placeholder="Username"></input>
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">Password: </label>
                <input onChange={changeHandler} id="email" type="password" defaultValue={userLogin.password} placeholder="Password"></input>
            </Form.Field>

                <Button type="submit"> <Link to="/profile">Login</Link></Button>
       

            </Form>

            {/* { userLogin && 
              <Message positive>
                  <Message.Header>Success</Message.Header>
                  <p>Loading Gigapet...</p>
              </Message>
            } */}


            <P>
				<strong>Don't Have A Gigapet?</strong>
                <Link to="/register"><Underlined> Register now.</Underlined></Link> 
			</P>
            </Content>
        </Container>
       </div>
    )
}

const mapStateToProps = (state) => {

  }

const mapDispatchToProps = {
  userLogin 
}

export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);

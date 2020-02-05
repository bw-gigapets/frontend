import React, { useState } from "react";
import styled from 'styled-components';
import { Form, Button, Message } from "semantic-ui-react";
import { Link, withRouter } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';


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

const LoginForm = props => {
    const [userLogin, setUser] = useState ({
        username: "",  password: "",
    })

    const changeHandler = event => {
        setUser({...userLogin, [event.target.name] : event.target.value})
        console.log()
    }

    const submitForm = event => {
        event.preventDefault()

    }

    const size = ['large'];

    const axiosLogin = e => {
        axiosWithAuth()
        .post('/auth/login', e.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload)
          setEntry({
            ...entry,
            isLoading: false
          });
          props.history.push('/profile')
        })
        .catch(err => console.log("Login Error", err.response))
      }
   
    
    
    return(
       
            <Container>
                <Content>
                <h1>Gigapets Login</h1>
            <Form size={size} key={size} onSubmit={submitForm}  >
           
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
       
    )
}



export default withRouter (LoginForm);
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
import styled from 'styled-components'
import useForm from '../components/useForm'

const Centered = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const AddChildWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #63d4b9;
  width: 280px;
  margin: 30px;
  border: 1px outset rgb(200, 200, 200);
  border-radius: 10px;
  overflow: hidden;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 26px;
  letter-spacing: 0.05rem;
  background: lightPurple;
  align-self: stretch;
  color: white;
  margin: auto;
  padding: 10px;
`




const AddChild = (props) => {

    const initialStateNewChild = {
        name: '',
        age: '',
        weight: ''
    }

    const handleSubmitCb = newChild => {
        setNewChild(initialStateNewChild)
        
    }
    
    const [newChild, setNewChild, handleChanges, handleSubmit] = useForm(initialStateNewChild, handleSubmitCb)

    
    return (
        <div >
            <AddChildWrap>
                <Title>Add Child</Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Name</label>
                            <input 
                                name="name"
                                type="text"
                                value={newChild.name}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Age</label>
                            <input 
                                name="age"
                                type="text"
                                value={newChild.age}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Weight</label>
                            <input 
                                name="weight"
                                type="text"
                                value={newChild.weight}
                                onChange={handleChanges}
                            />
                        </Form.Field>
                        
                        <Centered><Button color="black" type="submit">+</Button></Centered>
                    </Form>
                </AddChildWrap>
            
        </div>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = {
 
}

export default connect (mapStateToProps, mapDispatchToProps)(AddChild);
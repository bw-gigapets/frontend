import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import styled from 'styled-components';


const DelAccount= styled.div`
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
  color: white;
  margin: 0;
  padding: 10px;
`


const DeleteAccount = () =>{
  

    const [modalOpen, setModalOpen] = useState(false)
    const handleOpen = () => setModalOpen(true)
    const handleClose = () => setModalOpen(false)
    
    return (
        <>
            <DelAccount>
                <Title>Edit Account</Title>
                    
            <Modal 
                trigger={<Button color="red" onClick={handleOpen}>Delete Account</Button>}
                closeIcon
                open={modalOpen}
                onClose={handleClose}
            >
                <Modal.Content>
                    Are you sure you want to delete your account? This action is irreversible
                </Modal.Content>
                <Modal.Actions>
                    <Button color="red" >Yes, delete</Button>
                    <Button onClick={handleClose}>No</Button>
                </Modal.Actions>
            </Modal>
        </DelAccount>
        </>
    )
}

export default DeleteAccount;
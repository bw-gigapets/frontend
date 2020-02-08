import React from "react";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';




const HeaderContent = styled.div`
position: relative;
margin-top: -10px;
margin-bottom: 20px;
padding: 1.5rem;
background-color: #faeee7;
box-shadow: 0px 0px 9px rgba(184, 209, 200);
`

const MainNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
  margin: auto;
  padding: 2.5rem;
`


const Logo = styled.img`
    top: -1rem;
    position: absolute;
    width: 8%;
    padding-top: 2rem;
    margin-left 10%;
`
const activeClassName = "active";
const NavLinks = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  display: inline-block;
  background: white;
  height: 38px;
  padding: 0 20px;
  margin: 5px;
  color: #63d4b9;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);


  &:hover {
    color: #333;
    border-color: #888888;
    outline: 0;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 10px rgba(255, 198, 199);
  }

  &.${activeClassName} {
    background: white;
    box-shadow: 0px 0px 10px rgba(230, 145, 145);
  }
`




const NavHeader = () => {

 
  
  return (
    <HeaderContent>
      <Link to='/profile'><Logo src={`/gigapets-logo.png`}/></Link>
      <MainNav>
        <NavLinks to="/profile">Profile</NavLinks>
        <NavLinks to="/add-food">Add Food</NavLinks>
        <NavLinks to="/manage-account">Manage Account</NavLinks>
        <NavLinks to="/login">Sign Out</NavLinks>
         
        </MainNav>
    </HeaderContent>
  );
}

export default NavHeader;

import React from "react";
import styled from "styled-components";
import AddChild from "./AddChild";
import DeleteAccount from "./DelAccount";
import NavHeader from "./Layout/Navigation";


const ManageAccountWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const ManageChildren = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`


const ManageAccount = () => {
  return (
      <>
      <NavHeader/>
       <ManageAccountWrap>
        <ManageChildren>
        <AddChild />
        <DeleteAccount/>
        </ManageChildren>
    </ManageAccountWrap>
    </>
  );
};

export default ManageAccount
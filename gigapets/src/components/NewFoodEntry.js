import React, { useState } from "react";
import NavHeader from "./Layout/Navigation";
import AddEntry from "./NewEntry";


const AddFood = () => {
    return (
        <>
        <NavHeader/>
        <AddEntry/>
      </>
    );
  };
  
  export default AddFood;
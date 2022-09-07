import styled from "styled-components";
import { CostForm } from "./CostForm";
import React, { useState } from "react";

const Wrapper = styled.div`
  background-color: violet;
  border-radius: 1rem;
  box-shadow: 10px 10px 10px 1px violet;
  border: 5px solid black;
  outline: 2px solid white;
  padding: 1rem;
  margin: 2rem auto;
  width: 70rem;
  max-width: 95%;
  text-align: center;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid white;
  background-color: black;
  color: #fefae1;
  border-radius: 1rem;
  margin-right: 3px;

  &:hover {
    background-color: #2a5c84b2;
    border-color: #2a5c84b2;
  }
  &:active {
    background-color: #2a5c84b2;
    border-color: #2a5c84b2;
  }
  &:first-child {
    margin-right: 2rem;
  }
`;

export const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setIsFormVisible(false)
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostDataHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <Wrapper>
      {!isFormVisible && (
        <Button onClick={inputCostDataHandler}>Add new consumption</Button>
      )}
      {isFormVisible && (
        <CostForm 
        onSaveCostData={saveCostDataHandler}
        onCancel={cancelCostDataHandler}
        ></CostForm>
      )}
    </Wrapper>
  );
};

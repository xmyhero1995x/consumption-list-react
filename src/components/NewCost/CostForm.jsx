import styled from "styled-components";
import React, { useState } from "react";

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  text-align: left;
`;

const ControlLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const ControlInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

const Actions = styled.div`
  text-align: left;
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
    margin-right: 2rem
  }
`;

export const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submithandler}>
      <Controls>
        <ControlLabel>Name</ControlLabel>
        <ControlInput
          type="text"
          onChange={nameChangeHandler}
          value={inputName}
        ></ControlInput>
      </Controls>
      <Controls>
        <ControlLabel>Summ</ControlLabel>
        <ControlInput
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          value={inputAmount}
        ></ControlInput>
      </Controls>
      <Controls>
        <ControlLabel>Date</ControlLabel>
        <ControlInput
          type="date"
          min="2022-01-01"
          step="2022-12-31"
          onChange={dateChangeHandler}
          value={inputDate}
        ></ControlInput>
      </Controls>
      <Actions>
        <Button type="submit">Add consuption</Button>
        <Button type="button" onClick={props.onCancel}>Cancel</Button>
      </Actions>
    </form>
  );
};

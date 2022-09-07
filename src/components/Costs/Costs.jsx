import styled from "styled-components";
import { CostsFilter } from "./CostsFilter";
import React, { useState } from "react";
import { CostList } from "./CostsList";
import { CostsDiagram } from "./CostsDiagram";

const Wrapper = styled.section`
  padding: 1rem;
  background-color: violet;
  margin: 2rem auto;
  width: 70rem;
  max-width: 95%;
  border-radius: 1rem;
  box-shadow: 10px 10px 10px 1px violet;
  border: 5px solid black;
  outline: 2px solid white;
`;

export const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString === selectedYear;
  });

 

  return (
    <div>
      <Wrapper>
        <CostsFilter
          year={selectedYear}
          onChangeYear={yearChangeHandler} />
          <CostsDiagram costs={filteredCosts}/>
          <CostList costs={filteredCosts}/>
      </Wrapper>
    </div>
  );
};

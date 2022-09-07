import styled from "styled-components";
import { CostItem } from "./CostItem";

const CostsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FallBack = styled.ul`
  color: #fefae1;
  text-align: center;
`;


export const CostList = (props) => {

  if (props.costs.lenght === 0) {
    return <FallBack>No spendings</FallBack>;
  }

  return (
    <CostsList>
      {props.costs.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
      ))}
    </CostsList>
  );
};

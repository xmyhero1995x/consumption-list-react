import styled from "styled-components";
import { CostItem } from "./CostItem";

const Wrapper = styled.section`
  padding: 1rem;
  background-color: violet;
  margin: 2rem auto;
  width: 70rem;
  max-width: 95%;
  border-radius: 1rem;
  box-shadow: 10px 10px 10px 1px violet;
  border: 5px solid black;
  outline: 2px solid white
`;

export const Costs = (props) => {
  return (
    <Wrapper>
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      />
      <CostItem
        date={props.costs[2].date}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      />
    </Wrapper>
  );
};

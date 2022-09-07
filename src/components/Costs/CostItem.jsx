import styled from "styled-components";
import { CostDate } from "./CostDate";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: rgb(0, 0, 0);
  border-radius: 1rem;
  box-shadow: 10px 10px 15px 5px black;
  border: 1px solid white;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  background-color: rgb(0, 0, 0);

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fefae1;
  background-color: rgb(0, 0, 0);
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 5rem;
  display: flex;
  justify-content: center;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;

  @media (max-width: 580px) {
    padding: 0;
  }
`;

export const CostItem = (props) => {
  return (
    <li>
      <Wrapper>
        <CostDate date={props.date} />
        <Description>
          <Title>{props.description}</Title>
          <Price>${props.amount}</Price>
        </Description>
      </Wrapper>
    </li>
  );
};

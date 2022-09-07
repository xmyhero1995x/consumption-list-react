import styled from "styled-components";
import { DiagramBar } from "./DiagramBar";

const Wrapper = styled.section`
  padding: 1rem;
  border-radius: 12px;
  background-color: black;
  border: 1px solid white;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

export const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

    const maxMonthCosts = Math.max(...dataSetsValues)


  return (
    <Wrapper>
      {props.dataSets.map((dataSet) => (
        <DiagramBar
        key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </Wrapper>
  );
};

import styled from "styled-components";

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #fefae1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Fill = styled.div`
  background-color: #fff;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  color: white;
`;

export const DiagramBar = (props) => {

    let barFillHeight = '0%'

    if(props.maxValue > 0) {
        barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    }
  return (
    <Wrapper>
      <Inner>
        <Fill style={{
            height: barFillHeight
        }}></Fill>
      </Inner>
      <Label>{props.label}</Label>
    </Wrapper>
  );
};

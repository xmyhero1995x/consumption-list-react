import styled from "styled-components";

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  color: #fefae1;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);

`;

const Month = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  margin:0;
`;
const Day = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin:0;
`;
const Year = styled.p`
  font-size: 0.75rem;
  margin:0;
`;

export const CostDate = (props) => {
  const month = props.date.toLocaleString("ru-RU", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <Dates>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </Dates>
  );
};

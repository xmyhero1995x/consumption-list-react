import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  padding: 0 1rem;
`;

const FilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

export const CostsFilter = (props) => {

  
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };


  return (
    <Wrapper>
      <FilterControl>
        <FilterLabel>Выбор По Году</FilterLabel>
        <FilterSelect value={props.year} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </FilterSelect>
      </FilterControl>
    </Wrapper>
  );
};

import styled from "styled-components";

export const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
  width: 100%;

  margin: 15px;
  padding: 15px;
  border: 5px solid purple;
  border-radius: 25px;
  box-sizing: border-box;
`;

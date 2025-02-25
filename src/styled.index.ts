import styled from "styled-components";

export const MainContainer = styled("section")`
  position: relative;
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: var(--dark-black);
`;

export const FillerImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

import styled from "styled-components";

export const Card = styled.button`
  perspective: 1000px;
  width: 100%;
  height: 200px;
  position: relative;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const CardImage = styled.img`
  display: block;
  height: 200px;
  max-width: 380px;
  width: 100%;
  pointer-events: none;
  margin: 0 auto;
`;

export const CardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => (prop as string) !== "isFlipped",
})<{ isFlipped: boolean }>(({ isFlipped }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  transform: isFlipped ? "rotateY(180deg)" : "none",
}));

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 2;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  transform: rotateY(180deg);
  z-index: 1;
`;

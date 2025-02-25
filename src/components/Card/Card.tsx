import { FC } from "react";

import { CardProps } from "./types";
import * as S from "./Card.styled";

export const Card: FC<CardProps> = ({
  onClick,
  imgPath,
  isRevealed,
  isVisible,
  defaultImage,
}) => (
  <S.Card onClick={onClick}>
    <S.CardContainer isFlipped={isVisible || isRevealed}>
      <S.CardFront>
        <S.CardImage src={defaultImage} alt="Card Back" />
      </S.CardFront>
      <S.CardBack>
        <S.CardImage src={imgPath} alt="Card Content" />
      </S.CardBack>
    </S.CardContainer>
  </S.Card>
);

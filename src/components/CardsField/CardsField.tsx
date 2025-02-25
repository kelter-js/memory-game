import { FC, useEffect, useState } from "react";
import { CardsFieldProps } from "./types";
import { Card } from "../Card/Card";
import { Container } from "./CardsField.styled";

export const CardsField: FC<CardsFieldProps> = ({ cardsList, onPickCard }) => {
  const [isStartGame, setIsStartGame] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsStartGame(false), 1000);
  }, []);

  return (
    <Container>
      {cardsList.map(({ id, isRevealed, isVisible, imgPath }) => (
        <Card
          key={id}
          isRevealed={isRevealed}
          isVisible={isStartGame || isVisible}
          defaultImage={`${process.env.PUBLIC_URL}/assets/template.png`}
          imgPath={`${process.env.PUBLIC_URL}${imgPath}`}
          onClick={() => {
            if (!isStartGame) {
              onPickCard(id);
            }
          }}
        />
      ))}
    </Container>
  );
};

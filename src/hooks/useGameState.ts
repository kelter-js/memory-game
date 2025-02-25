import { useState } from "react";

import { DEFAULT_CARD_PRESETS } from "../constants";
import { checkGameStatus, getRandomField } from "../utils";
import { CardData } from "../types";

export const useGameState = () => {
  const [pickedCard, setPickedCard] = useState<null | CardData>(null);
  const [cardsField, setCardsField] = useState(
    getRandomField(DEFAULT_CARD_PRESETS)
  );
  const [amountOfTurns, setAmountOfTurns] = useState(0);
  const [isGameOver, setGameOver] = useState(false);

  const handlePickCard = (cardId: string) => {
    //find currently selected card object
    const selectedCard = cardsField.find((card) => card.id === cardId);

    //determine if card exist
    const hasNoCardToInteractWith =
      !selectedCard ||
      selectedCard.isRevealed ||
      (selectedCard.isVisible && selectedCard.id === pickedCard?.id);

    if (hasNoCardToInteractWith) return;

    //if we have not picked card at the moment
    if (!pickedCard) {
      setPickedCard(selectedCard);
      setAmountOfTurns((state) => state + 1);

      const cardData = cardsField.find((card) => card.id === selectedCard.id);

      if (cardData) {
        //changing card state to be visible, so picked card stay revealed
        cardData.isVisible = true;
        setCardsField((state) => [...state]);
        return;
      }
    }

    //check if newly selected card and already picked card have same type and their ids arent the same
    if (
      selectedCard.type === pickedCard?.type &&
      selectedCard.id !== pickedCard?.id
    ) {
      //устанавливаем у обеих карточках значение isRevealed true
      setCardsField((state) => {
        const firstSelectedCard = state.find(
          (card) => card.id === pickedCard.id
        );
        const secondSelectedCard = state.find(
          (card) => card.id === selectedCard.id
        );

        if (firstSelectedCard && secondSelectedCard) {
          firstSelectedCard.isRevealed = true;
          secondSelectedCard.isRevealed = true;
          firstSelectedCard.isVisible = false;
          secondSelectedCard.isVisible = false;

          if (checkGameStatus(state)) {
            setGameOver(true);
          }
        }

        return [...state];
      });

      setAmountOfTurns((state) => state + 1);
      setPickedCard(null);

      return;
    }

    //if newly selected card have different type than pickedCard
    if (pickedCard && selectedCard.type !== pickedCard.type) {
      //resetting card visibility
      pickedCard.isVisible = false;
      setPickedCard(null);
      setAmountOfTurns((state) => state + 1);

      setCardsField((state) => {
        const firstSelectedCard = state.find(
          (card) => card.id === pickedCard.id
        );
        const secondSelectedCard = state.find(
          (card) => card.id === selectedCard.id
        );

        if (firstSelectedCard && secondSelectedCard) {
          firstSelectedCard.isVisible = true;
          secondSelectedCard.isVisible = true;
          //creating effect, that after user wrongly select card - we show it for short period and then hide it again
          setTimeout(() => {
            firstSelectedCard.isVisible = false;
            secondSelectedCard.isVisible = false;
            setCardsField((state) => [...state]);
          }, 500);
          //setting game over if user already open every card, letting him to play again
          if (checkGameStatus(state)) {
            setGameOver(true);
          }
        }

        return [...state];
      });

      return;
    }
  };

  const handleResetGameField = () => {
    setCardsField(getRandomField(DEFAULT_CARD_PRESETS));
    setAmountOfTurns(0);
    setGameOver(false);
  };

  const handleRestartGame = () => {
    DEFAULT_CARD_PRESETS.forEach((card) => {
      card.isRevealed = false;
      card.isVisible = false;
    });

    setGameOver(false);
    handleResetGameField();
  };

  return {
    handlePickCard,
    isGameOver,
    amountOfTurns,
    cardsField,
    handleRestartGame,
  };
};

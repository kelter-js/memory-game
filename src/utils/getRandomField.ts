import { CardData } from "../types";
import { shuffle } from "./shuffle";
import { v4 } from "uuid";

const MIN_AMOUNT_OF_CARDS = 8;

export const getRandomField = (data: CardData[]): CardData[] => {
  const shuffledData = shuffle([...data]);
  const cardsPreset = shuffledData.slice(0, MIN_AMOUNT_OF_CARDS);

  const duplicatedCards = cardsPreset.reduce<CardData[]>((acc, card) => {
    const duplicatedCard = { ...card, id: v4() };
    acc.push(card, duplicatedCard);
    return acc;
  }, []);

  return shuffle(duplicatedCards);
};

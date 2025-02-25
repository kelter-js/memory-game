import { CardData } from "../types";

export const checkGameStatus = (field: CardData[]) =>
  field.every((card) => card.isRevealed === true);

import { CardData } from "../../types";

export interface CardsFieldProps {
  cardsList: CardData[];
  onPickCard: (cardId: string) => void;
  isGameOver: boolean;
}

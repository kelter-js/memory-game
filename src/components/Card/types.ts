import { CardData } from "../../types";

export interface CardProps extends Omit<CardData, "type" | "id"> {
  onClick: VoidFunction;
  defaultImage: string;
}

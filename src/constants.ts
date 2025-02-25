import { v4 } from "uuid";

import { CardData } from "./types";

export const DEFAULT_CARD_PRESETS: CardData[] = [
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/bow.png`,
    isRevealed: false,
    isVisible: false,
    type: "bow",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/dagger.png`,
    isRevealed: false,
    isVisible: false,
    type: "dagger",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/demon.png`,
    isRevealed: false,
    isVisible: false,
    type: "demon",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/gnome.png`,
    isRevealed: false,
    isVisible: false,
    type: "gnome",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/helmet.png`,
    isRevealed: false,
    isVisible: false,
    type: "helmet",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/knight.png`,
    isRevealed: false,
    isVisible: false,
    type: "knight",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/orc.png`,
    isRevealed: false,
    isVisible: false,
    type: "orc",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/ring.png`,
    isRevealed: false,
    isVisible: false,
    type: "ring",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/shield.png`,
    isRevealed: false,
    isVisible: false,
    type: "shield",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/sword.png`,
    isRevealed: false,
    isVisible: false,
    type: "sword",
    id: v4(),
  },
  {
    imgPath: `${process.env.PUBLIC_URL}/assets/witch.png`,
    isRevealed: false,
    isVisible: false,
    type: "witch",
    id: v4(),
  },
];

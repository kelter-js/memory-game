import { FC } from "react";

import { RestartProps } from "./types";
import { RestartButton } from "./Restart.styled";

export const Restart: FC<RestartProps> = ({ onClose }) => (
  <RestartButton onClick={onClose}>Перезапустить игру</RestartButton>
);

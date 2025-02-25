import { FC, MouseEventHandler } from "react";
import { ModalProps } from "./types";
import * as S from "./Modal.styled";
import { Restart } from "../Restart";

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const handleOverlayClick: MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <S.ModalOverlay onClick={handleOverlayClick} />
      <S.ModalContent>
        {children}
        <Restart onClose={onClose} />
      </S.ModalContent>
    </>
  );
};

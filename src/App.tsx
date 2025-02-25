import { CardsField } from "./components/CardsField";
import { Modal } from "./components/Modal";
import { Statistics } from "./components/Statistics";
import { useGameState } from "./hooks/useGameState";
import { MainContainer, FillerImage } from "./styled.index";

const App = () => {
  const {
    handlePickCard,
    isGameOver,
    amountOfTurns,
    cardsField,
    handleRestartGame,
  } = useGameState();

  return (
    <MainContainer>
      {isGameOver && (
        <Modal onClose={handleRestartGame}>
          <Statistics score={amountOfTurns} />
        </Modal>
      )}

      <FillerImage
        alt="filler"
        src={`${process.env.PUBLIC_URL}/assets/scribble.svg`}
        width="100%"
        height="100%"
      />

      <CardsField
        cardsList={cardsField}
        onPickCard={handlePickCard}
        isGameOver={isGameOver}
        key={String(isGameOver)}
      />
    </MainContainer>
  );
};

export default App;

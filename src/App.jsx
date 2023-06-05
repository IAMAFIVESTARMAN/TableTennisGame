import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player";
import { Modal } from "./components/Modal";

function App() {
  const [winner, setWinner] = useState(null);
  const [gameStatus, setGameStatus] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("1");
  const [score, setScore] = useState([0, 0]);
  const [modal, setModal] = useState(false);

  let winningscore;

  useEffect(() => {
    winningscore = score[0] >= 10 && score[1] >= 10 ? 12 : 11;
    // console.log(winningscore);
  }, [score]);
  // function gamestatusHandler() {
  //   setGameStatus(false);
  // }

  function inchandler(id) {
    if (!gameStatus) return;
    setCurrentPlayer(`${id === "0" ? "2" : "1"}`);
    const updatedScore = [...score];

    updatedScore[+id] += 1;
    setScore(updatedScore);

    checkWinner();
  }

  function dechandler(id) {
    if (!gameStatus) return;
    const updatedScore = [...score];
    updatedScore[+id] -= 1;
    setScore(updatedScore);

    checkWinner();

    setCurrentPlayer(`${id === "0" ? "2" : "1"}`);
  }

  function checkWinner() {
    const [player1Score, player2Score] = score;

    if (player1Score >= winningscore && player1Score - player2Score >= 2) {
      setWinner("Player 1");
      setGameStatus(false);
    } else if (
      player2Score >= winningscore &&
      player2Score - player1Score >= 2
    ) {
      setWinner("Player 2");
      setGameStatus(false);
    }
  }

  function resetHandler() {
    setGameStatus(true);
    setWinner(null);
    setScore([0, 0]);
    winningscore = 11;
    setCurrentPlayer("1");
  }

  function modalHandler() {
    setModal((prev) => !prev);
  }
  const sectionClasses = !gameStatus
    ? "bg-emerald-500 max-h-full "
    : "max-h-full";

  return (
    <section className={sectionClasses}>
      {gameStatus && (
        <div className="flex justify-between ">
          <div
            className={`${
              currentPlayer === "1" ? "bg-rose-300  " : ""
            } p-28 rounded-3xl`}
          >
            <Player
              id="0"
              score={score[0]}
              Oninchandler={inchandler}
              Ondechandler={dechandler}
            />
          </div>
          <div className=" mb-20 text-5xl self-center text-center">
            <div className="flex flex-col gap-16">
              <button
                className="bg-slate-500 py-10 rounded-3xl"
                onClick={modalHandler}
              >
                Show Rules
              </button>
              {modal && <Modal onClose={modalHandler}></Modal>}
              <h3>Current Player </h3>
              <p className="text-8xl">Player {+currentPlayer}</p>
            </div>
          </div>
          <div
            className={`${
              currentPlayer === "2" ? "bg-rose-300 " : ""
            } p-28 rounded-3xl`}
          >
            <Player
              id="1"
              score={score[1]}
              Oninchandler={inchandler}
              Ondechandler={dechandler}
            />
          </div>
        </div>
      )}

      {!gameStatus && (
        <div className="min-h-screen justify-center flex items-center text-5xl text-white flex-col gap-11">
          <h2>Winner is {winner} 🎉</h2>

          <button onClick={resetHandler} className="py-10 px-5 bg-slate-500">
            Reset Game
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

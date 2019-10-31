import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);
  const [inning, setInning] = useState(9);
  const [half, setHalf] = useState("🔼");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  // const [bases, setBases] = useState([false, false, false]);
  const [bases, setBases] = useState(0);
  const [atBat, setAtBat] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // 🔽

  const endGame = () => {
    console.log("Game ended");
    setOuts(0);
    setInning(1);
    setBalls(0);
    setStrikes(0);
    setHalf("🔼");
    // setTeam1Score(0);
    // setTeam2Score(0);
    setGameOver(true);
  };

  const getOut = () => {
    if (outs < 2) {
      setOuts(outs => outs + 1);
    } else {
      setOuts(0);
      setBases(0);
      changeInning();
    }
  };

  const changeInning = () => {
    if (half === "🔼") {
      setHalf("🔽");
      setAtBat(1);
    } else if (half === "🔽") {
      if (inning < 9) {
        setHalf("🔼");
        setAtBat(0);
        setInning(inning => inning + 1);
      } else {
        endGame();
      }
    }
  };

  const getBall = () => {
    console.log("Ball");

    if (balls < 3) {
      setBalls(balls => balls + 1);
    } else {
      // setBalls(balls => 0);
      getHit();
    }
  };

  const getStrike = () => {
    console.log("Strike");

    if (strikes < 2) {
      setStrikes(strikes => strikes + 1);
    } else {
      setStrikes(strikes => 0);
      getOut();
    }
  };

  const getFoul = () => {
    console.log("Foul");

    if (strikes < 2) {
      setStrikes(strikes => strikes + 1);
    }
  };

  const getHit = () => {
    console.log("Hit");

    setBalls(0);
    setStrikes(0);

    if (bases < 3) {
      setBases(bases + 1);
    } else {
      if (atBat === 0) {
        team1Run();
      } else if (atBat === 1) {
        team2Run();
      }
    }
  };

  const team1Run = () => {
    setTeam1Score(team1Score => team1Score + 1);
  };

  const team2Run = () => {
    setTeam2Score(team2Score => team2Score + 1);
  };

  return (
    <div className="App">
      <Display
        inning={inning}
        outs={outs}
        half={half}
        balls={balls}
        strikes={strikes}
        bases={bases}
        team1Score={team1Score}
        team2Score={team2Score}
        gameOver={gameOver}
      />
      {gameOver ? null : <Dashboard getBall={getBall} getStrike={getStrike} getFoul={getFoul} getHit={getHit} />}
      
    </div>
  );
}

export default App;

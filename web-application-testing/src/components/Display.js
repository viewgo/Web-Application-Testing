import React from "react";

export default function Display(props) {
  if (props.gameOver) {
    return (
      <>
        <h1>
          Team 1: {props.team1Score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Team 2: {props.team2Score}
        </h1>
        <h1>FINAL</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>
          Team 1: {props.team1Score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Team 2: {props.team2Score}
        </h1>
        <h2>
          Inning: {props.inning}
          {props.half}
        </h2>
        <h2>Outs: {props.outs}</h2>
        <h2>Balls: {props.balls}</h2>
        <h2>Strikes: {props.strikes}</h2>

        <h3>
          Bases: 1: {props.bases > 0 ? "✅" : "❌"} 2: {props.bases > 1 ? "✅" : "❌"} 3:{" "}
          {props.bases === 3 ? "✅" : "❌"}
        </h3>
      </>
    );
  }
}

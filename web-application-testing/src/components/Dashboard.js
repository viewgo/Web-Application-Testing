import React from 'react';

export default function Dashboard(props) {
  return (
    <>
Dashboard
<button onClick={props.getBall}>Ball</button>
<button onClick={props.getStrike}>Strike</button>
<button onClick={props.getFoul}>Foul</button>
<button onClick={props.getHit}>Hit</button>
    </>
  );
}


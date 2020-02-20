import React from "react";
import "../styles/Buttons.css";

const Buttons = props => {
  return (
    <div className="buttons">
      <button className="btn big clear" onClick={props.clear}>
        CA
      </button>
      <button className="btn clear" onClick={props.backspace}>
        C
      </button>
      <button
        data-key="*"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        x
      </button>
      <button
        data-key="7"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        7
      </button>
      <button
        data-key="8"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        8
      </button>
      <button
        data-key="9"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        9
      </button>
      <button
        data-key="/"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        ÷
      </button>
      <button
        data-key="4"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        4
      </button>
      <button
        data-key="5"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        5
      </button>
      <button
        data-key="6"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        6
      </button>
      <button
        data-key="-"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        -
      </button>
      <button
        data-key="1"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        1
      </button>
      <button
        data-key="2"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        2
      </button>
      <button
        data-key="3"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        3
      </button>
      <button
        data-key="+"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        +
      </button>
      <button
        data-key="."
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        .
      </button>
      <button
        data-key="0"
        className="btn"
        onClick={e => props.handleInput(e.target.dataset.key)}
      >
        0
      </button>
      <button data-key="=" className="big btn" onClick={props.sumUp}>
        =
      </button>
    </div>
  );
};

export default Buttons;

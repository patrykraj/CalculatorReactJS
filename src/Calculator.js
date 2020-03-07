import React, { Component } from "react";
import "./styles/Calculator.css";
import * as math from "mathjs";

import Result from "./components/Result";
import Buttons from "./components/Buttons";

class Calculator extends Component {
  state = {
    result: "",
    finalResult: false
  };

  action = {
    operators: ["*", "/", "+", "."]
  };

  clearAll = () => {
    this.setState({
      result: "",
      prevResult: "",
      finalResult: false
    });
  };

  backspace = () => {
    this.setState(state => ({
      result: state.result.slice(0, -1)
    }));
  };

  handleInput = value => {
    const { result } = this.state;
    const { operators } = this.action;
    let isFlawed = false;

    if (result.length > 11) return alert("Max. 12 chars!");
    if (!result && operators.includes(value)) return;
    if (
      result[result.length - 1] === "-" &&
      (value === "-" || operators.includes(value))
    )
      return;

    if (result.length > 0) {
      operators.forEach(operator => {
        if (
          result[result.length - 1] === operator &&
          operators.includes(value)
        ) {
          isFlawed = true;
        }
      });
    }

    if (isFlawed) return;

    if (this.state.finalResult) {
      this.setState({
        result: "" + value,
        finalResult: false
      });
    } else {
      this.setState(state => ({
        result: state.result + value
      }));
    }
  };

  sumUp = () => {
    const { result } = this.state;
    const { operators } = this.action;

    if (!result || result === "-") return;
    if (operators.includes(result[result.length - 1]))
      return alert("Error: Wrong input");

    try {
      this.setState({
        result: "",
        prevResult: math.evaluate(this.state.result).toString(),
        finalResult: true
      });
    } catch (e) {
      console.log(e);
      alert("Error: wrong input");
    }
  };

  handleKey = e => {
    if (
      (!isNaN(e.key) ||
        this.action.operators.includes(e.key) ||
        e.key === "-") &&
      e.keyCode !== 32
    )
      this.handleInput(e.key);
    else if (e.keyCode === 8) this.backspace();
    else if (e.keyCode === 13 || e.keyCode === 187) this.sumUp();
    return;
  };

  render() {
    return (
      <div tabIndex={0} onKeyDown={this.handleKey} className="app-containter">
        <div className="Calculator">
          <Result
            result={this.state.result}
            prevResult={this.state.prevResult}
          />
          <Buttons
            handleInput={this.handleInput}
            sumUp={this.sumUp}
            clear={this.clearAll}
            backspace={this.backspace}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;

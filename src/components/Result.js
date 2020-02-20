import React from "react";
import "../styles/Result.css";

const Result = props => {
  return (
    <div className="view">
      <span className="prevResult">
        {props.prevResult ? props.prevResult : null}
      </span>
      <span className="currentResult">
        {props.result ? props.result : null}
      </span>
    </div>
  );
};

export default Result;

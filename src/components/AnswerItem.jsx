import React from "react";

function AnswerItem(props) {

  function isCorrect() {
    return props.selected === props.correct;
  }

  return (
    <div className="card answerItem">
      <div className="card-header">{props.question}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item correct">{props.selected}</li>
        { !isCorrect() && <li className="list-group-item wrong">{props.correct}</li>}
      </ul>
    </div>
  );
}

export default AnswerItem;

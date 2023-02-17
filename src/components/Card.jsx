import React, { useState } from "react";
import { quizItems } from "./../data";
import CardItem from "./CardItem";
import AnswerItem from "./AnswerItem";

function Card(props) {
  let [index, setIndex] = useState(0);
  let [answers, addAnswer] = useState([]);

  function onChangeValue(event) {
    addAnswer((prev) => {
      let a = [...prev];
      a.push(event.target.value);
      return a;
    });
  }

  function onButtonPressed() {
    setIndex(index + 1);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">
          {index < 4 ? quizItems[index].question : "Results"}
        </h5>
      </div>
      <div className="card-body">
        <div onChange={onChangeValue}>
          {index < 4 && <CardItem answer={quizItems[index].a} />}
          {index < 4 && <CardItem answer={quizItems[index].b} />}
          {index < 4 && <CardItem answer={quizItems[index].c} />}
          {index < 4 && <CardItem answer={quizItems[index].d} />}
        </div>
        {index > 3 && <AnswerItem question={quizItems[0].question} selected={answers[0]} correct={quizItems[0].correct}/>}
        {index > 3 && <AnswerItem question={quizItems[1].question} selected={answers[1]} correct={quizItems[1].correct}/>}
        {index > 3 && <AnswerItem question={quizItems[2].question} selected={answers[2]} correct={quizItems[2].correct}/>}
        {index > 3 && <AnswerItem question={quizItems[3].question} selected={answers[3]} correct={quizItems[3].correct}/>}
      </div>
      <div class="card-footer">
        {index < 4 && <button className="nextButton" onClick={onButtonPressed}>next</button>}
      </div>
    </div>
  );
}

export default Card;

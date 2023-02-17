import React from "react";

function CardItem(props) {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value={props.answer}
          name="flexRadioDefault"
          id="flexRadioDefault1"
        ></input>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {props.answer}
        </label>
      </div>
    </div>
  );
}

export default CardItem;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "rx-actions/TaskActionCreator";
import "styles/components/AddCard.scss"

const AddCard = () => {
  const [input, updateInput] = useState("");
  const dispatch = useDispatch();

  const addCard = (): void => {
    dispatch(actions.addCard(input));
    updateInput("");
  }

  return (
    <div className="com-addcard">
      <input
        className="form-control"
        onChange={ e => updateInput(e.target.value) }
        value={input}
      />
      <button className="btn btn-primary" onClick={ addCard } > Add card </button>
    </div>
  )

}

export default AddCard;
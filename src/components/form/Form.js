import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import Input from "./Input";
import { v4 as uuid } from "uuid";

const Form = (props) => {
  const { onSubmit } = props;

  const [enteredInput, setEnteredInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    const newPost = {
      id: uuid(),
      title: enteredInput,
      date: new Date(),
      voteCount: 0,
    };
    onSubmit({ type: "newPost", payload: newPost });
    setEnteredInput("");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input onChange={setEnteredInput} value={enteredInput} />
      <Button />
    </form>
  );
};

export default Form;

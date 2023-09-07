import React, { useContext, useState } from "react";
import axios from "axios";
import loadingGif from "../images/loading.gif";
import { FetchContext } from "../contexts/FetchContext";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");
  const [buttonState, setButtonState] = useState("Create");
  const { active, setActive } = useContext(FetchContext);

  function handleClick(e) {
    e.preventDefault();

    if (title === "" || description === "") {
      setErr("Both fields must be set");
      return;
    }

    setButtonState(<img className="loading" src={loadingGif} alt="" />);

    axios
      .post("http://127.0.0.1:8000/tasks/create/", {
        title: title,
        description: description,
      })
      .then((res) => {
        setTitle("");
        setDescription("");
        setButtonState("Create");
        setActive(true);
      })
      .catch((err) => {
        setErr("Couldn't send request to the server. Try again");
        setButtonState("Create");
      });
  }

  return (
    <div className="Create">
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        maxLength="50"
        className="title"
        type="text"
        value={title}
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        maxLength="2000"
        className="description"
        type="text"
        value={description}
      />
      {err && <div className="err">{err}</div>}
      <button onClick={handleClick}>{buttonState}</button>
    </div>
  );
}

export default Create;

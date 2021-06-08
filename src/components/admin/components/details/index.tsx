import React, { useState } from "react";
import "./style.css";

function Details({ list, setDetails, id, details }) {
  const [edit, setEdit] = useState(false);
  const [valueInput, setValueInput] = useState([]);
  const onChange = (event) => {
    setValueInput(event.target.value);
  };

  const save = () => {
    setEdit(!edit);
    console.log(id);
  };
  return (
    <li>
      <i className="fas fa-ellipsis-v"></i>
      {edit ? (
        <input
          className="form-control"
          defaultValue={list}
          onChange={(event) => onChange(event)}
          name={list}
        />
      ) : (
        <span>{list}</span>
      )}

      <span>
        {edit ? (
          <i
            className="fas fa-share"
            onClick={() => {
              save();
            }}
          ></i>
        ) : (
          <i
            className="fas fa-pen"
            onClick={() => {
              setEdit(!edit);
            }}
          ></i>
        )}
      </span>

      <span>
        <i className="fas fa-trash-alt"></i>
      </span>
    </li>
  );
}

export default Details;

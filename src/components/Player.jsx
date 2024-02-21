import React from "react";
import { useState } from "react";

export default function Player({ initialPlayerName, symbol, isActive,onChangeName}) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing((editing) => !isEditing);
    if (isEditing){
       onChangeName(symbol,playerName)
    }
   
  }
  function handlePlayerNameChange(e) {
    setPlayerName(e.target.value)
  }
  let editablePlayerName = (
    <span className="player-name">{playerName}</span>
  );
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handlePlayerNameChange}/>;
  }

  return (
    <li className={isActive? 'active':undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

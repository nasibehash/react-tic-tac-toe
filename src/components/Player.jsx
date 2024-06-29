import { useState } from 'react';

export default function Player ( {initialName, symbol, isActive} ) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ playerName, setPlayerName ] = useState(initialName);

  function handleEditButton () {
    setIsEditing(( isEditing ) => !isEditing);
  }

  function handleChange ( event ) {
    setPlayerName(event.target.value);
  }

  let editabelPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editabelPlayerName = <input type="text" value={playerName} onChange={handleChange} required/>;
  }
  return (
    <li className={isActive ? 'active' : undefined}>
                  <span className="player">
                    {editabelPlayerName}
                    <span className="player-symbol">{symbol}</span>
                  </span>
      <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
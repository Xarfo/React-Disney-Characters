import React from 'react';

function CharacterForm(props) {
  console.log('Character Form is re-rendering');
  return (
    <form onSubmit={props.addNewCharacter}>
      {/* this input "controlled" input */}
      <input
        value={props.characterName}
        type="text"
        name="characterName"
        placeholder="Name"
        onChange={props.handleChanges}
      />
      <input
        value={props.characterMovie}
        type="text"
        name="characterMovie"
        placeholder="Movie"
        onChange={props.handleChanges}
      />
      <button type="submit">Add Character</button>
    </form>
  );
}

export default CharacterForm;

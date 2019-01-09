import React from 'react';

function CharacterList(props) {
  // do more stuff here
  return (
    <div>
      {props.disneyDataList.map((character, index) => {
        return <div key={index}>{character.characterName}</div>;
      })}
    </div>
  );
  // this won't get touched
}

export default CharacterList;

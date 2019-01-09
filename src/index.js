import React from 'react';
import ReactDOM from 'react-dom';

import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
import './styles.css';

const disneyData = [
  { characterName: 'Mickey Mouse' },
  { characterName: 'Minnie Mouse' },
  { characterName: 'Donald Duck' },
  { characterName: 'Goofy' },
  { characterName: 'Pluto' }
];

class App extends React.Component {
  constructor() {
    super();
    // state is immutable
    this.state = {
      characterList: disneyData,
      characterName: '',
      characterMovie: ''
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewCharacter = ev => {
    ev.preventDefault();
    this.setState({
      characterList: [
        ...this.state.characterList,
        { characterName: this.state.characterName }
      ],
      characterName: ''
    });
  };

  render() {
    // Always need this
    console.log('render is running');
    return (
      <div className="App">
        <CharacterList disneyDataList={this.state.characterList} />
        <CharacterForm
          addNewCharacter={this.addNewCharacter}
          handleChanges={this.handleChanges}
          characterName={this.state.characterName}
          characterMovie={this.state.characterMovie}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

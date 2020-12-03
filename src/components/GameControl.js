import React from 'react';
import Figure from './Figure';
import Word from './Word';
//import WrongLetters from '.'
import PropTypes from 'prop-types';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wrongLettersArray: [],
      lettersGuessedArray: [],
      rightLettersArray: ['A', 'P', 'P', 'L', 'E'],
      displayLetters: [],
      isGameOver: false
    };
  }

  handleCheckingKey = (e) => {
    console.log(String.fromCharCode(e.keyCode));
    const keyPressed = String.fromCharCode(e.keyCode);
    if (!this.state.lettersGuessedArray.includes(keyPressed)) {
      const newLettersGuessedArray = this.state.lettersGuessedArray
      newLettersGuessedArray.push(keyPressed)
      console.log(newLettersGuessedArray);
      this.setState({
        lettersGuessedArray: newLettersGuessedArray
      })  
    }
  }

  handleGameOver = () => {
    if (this.state.wrongLettersArray.length > 5) {
      this.setState({
        isGameOver: true
      })
    }
  }

  handleShowingCorrectLetters = () => {
    const newDisplayLetters = [];
    for (let i = 0; i < this.state.rightLettersArray.length; i++) {
      if (this.state.lettersGuessedArray.includes(this.state.rightLettersArray[i])) {
        newDisplayLetters.push(this.state.rightLettersArray[i])
      } else {
        newDisplayLetters.push('_')
      }
    }
    this.setState({
      displayLetters: newDisplayLetters
    })
  }

  render() {
    document.addEventListener('keydown', this.handleCheckingKey);
    this.state.isGameOver = this.state.isGameOver ? this.handleGameOver() : this.state.isGameOver
    this.handleShowingCorrectLetters()
    return (
      <React.Fragment>
        <Figure limbCount={this.state.wrongLettersArray.length}/>
      </React.Fragment>
    )
  }
}

export default GameControl;
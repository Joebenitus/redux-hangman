import React from 'react';
import PropTypes from 'prop-types';

const Figure = (props) => {
  const figureStates = [
  ' +======+\n |      |\n |\n |\n |\n |\n==========',
  ' +======+\n |      |\n |      0\n |\n |\n |\n==========',
  ' +======+\n |      |\n |      0\n |      |\n |         \n |\n==========',
  ' +======+\n |      |\n |      0\n |     /|\n |\n |\n==========',
  ' +======+\n |      |\n |      0\n |     /|\\\n |\n |\n==========',
  ' +======+\n |      |\n |      0\n |     /|\\\n |     /\n |\n==========',
  ' +======+\n |      |\n |      0\n |     /|\\\n |     / \\\n |\n==========']
  return (
    <>
      <pre>{figureStates[props.limbCount]}</pre>
    </>
  )
}

Figure.propTypes = {
  limbCount: PropTypes.number
}

export default Figure;
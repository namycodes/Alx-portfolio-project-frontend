import React from 'react';
import PropTypes from 'prop-types'

function Hello(props){
  return <h1>Hello, {props.name}! Welcome to {props.place}.</h1>
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

export default Hello;
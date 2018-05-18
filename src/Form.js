import React from 'react';

const Form = ({getVideos}) => {
  return (
      <form onSubmit={(event) => {
        event.preventDefault();

        const userInput = event.target.userInput.value

        getVideos(userInput)
      }}>
        <label>Type and enter your favorite artist!</label>
        <input type="text" name="userInput"/>
      </form>
  )
}

export default Form;

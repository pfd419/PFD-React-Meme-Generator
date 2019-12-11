import React from "react";
import statics from '../statics';

const TextSelectors = props => {
    const imageTextHandler = e => {
      const { value, name } = e.target;
  
      props.dispatch({ type: statics.SET, value: { [name]: value } });
    };
  
    const resetHandler = e => {
      e.preventDefault();
      props.dispatch({ type: statics.RESET });
    };
  
    return (
      <div>
        Top Text:
        <input
          name="imageTextTop"
          value={props.imageTextTop}
          onChange={imageTextHandler}
        />
        <br />
        Bottom Text:
        <input
          name="imageTextBottom"
          value={props.imageTextBottom}
          onChange={imageTextHandler}
        />
        <br />
        <button onClick={resetHandler}>Reset</button>
      </div>
    );
  };


export default TextSelectors;
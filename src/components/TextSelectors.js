import React from "react";
import { CompactPicker } from 'react-color';

import statics from '../statics';

const TextSelectors = props => {
  const imageTextHandler = e => {
    const { value, name } = e.target;

    props.dispatch({ type: statics.SET, value: { [name]: value } });
  };
  const resizeFontHandler = e => {
    const { value } = e.target;

    props.dispatch({ type: statics.SET, value: { fontSize: value } });
  };
  const handleColorChange = e => {
    const value = e.hex;
    console.log(e)
    console.log(value)
    props.dispatch({ type: statics.SET, value: { fontColor: value } });
  };
  const resetHandler = e => {
    e.preventDefault();
    
    props.dispatch({ type: statics.RESET });
  };

  return (
    <div>
      Top Text:&nbsp;
      <input
        name="imageTextTop"
        value={props.imageTextTop}
        onChange={imageTextHandler}
      />
      <br />
      Bottom Text:&nbsp;
      <input
        name="imageTextBottom"
        value={props.imageTextBottom}
        onChange={imageTextHandler}
      />
      <br /><br />
      Font Size&nbsp;
      <button onClick={resizeFontHandler} value={parseInt(props.fontSize) - 1}>-</button>
      <button onClick={resizeFontHandler} value={parseInt(props.fontSize) + 1}>+</button>
      <br /><br />
      Font Color:
      <br/>
      <CompactPicker color={props.fontColor} onChange={handleColorChange} />
      <br /><br />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};


export default TextSelectors;
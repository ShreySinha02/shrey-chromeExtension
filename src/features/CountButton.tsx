import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { GenerateBox } from './GenerateBox';
import ai from "data-base64:~asset/ai.png"
export const CountButton = ({toggleState}) => {
  const [count, setCount] = useState(0);
  const [boxGenerated, setBoxGenerated] = useState(false); // State to track if box is generated

  const handleClick = () => {
    toggleState()
  };

  return (
    <button 
      onClick={handleClick}
      className="rounded-full bg-blue-300 w-6 h-6 top-[80] left-[420] absolute"
    >
      <img src={ai}/>
    </button>
  );
};

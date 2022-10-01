import React, { useState } from "react";
import Excersice1 from "./Excersice1";

function TextForm(props) {
  //convert to uppercase
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("uppercase has been convert","success");
  };

  //convert to lowercase

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("lowercase has been convert","success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //excersice 1

  //clear text

  const handleClear = () => {
    const newText = " ";
    setText(newText);
    props.showAlert(" has been  cleartext ","success");
  };

  //copy text

  const handleCopy = () => {
   const texty = document.getElementById("myBox");
    texty.select();
    document.execCommand("copy");
    // setText(text);
  
    // navigator.clipboard.writeText(text);
    props.showAlert("coppied text to clipbord ","success");
  };

  //remove extra space
  const handleExtraSpace = () => {
    const newText = text.replace(/ /g,'');
    setText(newText);
    props.showAlert(" has been remove text ","success");
  };

  //charAt in text

  const handleCharAt = () =>{
    const newText = text.charAt();
    setText(newText)
    props.showAlert(" has been charAt  ","success");
  }

  return (
    <>
      <div className="container my-4" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3 my-4">
          <h3> {props.heading}</h3>
          <label htmlFor="myBox" className="form-label">
            Example Textarea
          </label>
          <textarea style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleChange}
          ></textarea>
          {/* //convert to uppercase */}
          <button className="btn btn-primary my-3" onClick={handleUpperCase}>
            Convert Uppercase
          </button>

          {/* convert to lowercase */}
          <button
            className="btn btn-primary my-3 mx-4"
            onClick={handleLowerCase}
          > Convert Lowercase</button>

          <Excersice1 handleClear={handleClear} handleCopy={handleCopy}  handleExtraSpace={handleExtraSpace} handleCharAt={handleCharAt}/>

        </div>
      
      <div className="container my-4">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and{text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : 'Enter somthing to preview it here'}</p>
      </div>
      </div>
    </>
  );
}

export default TextForm;

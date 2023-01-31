import React, { useState } from "react";

// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleupclick = ()=> {
    let NewText = Text.toUpperCase();
    setText(NewText)
    props.showAlert("uperCase Has Been Enabled:- ","success");
  };

  const handleloclick = ()=> {
    let NewText = Text.toLowerCase();
    setText(NewText)
    props.showAlert("lowerCase Has Been Enabled:- ","success");
  };

  const handleclear = ()=> {
    let NewText = " ";
    setText(NewText)
    props.showAlert("Text Has Been Cleared:- ","success");
  };

  const handleonchange = (Event)=> {
    setText(Event.target.value)
  };

  const [Text, setText] = useState("Enter you're text here:- ");

  return (
    <>
      <div style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={Text}
            id="exampleFormControlTextarea1"
            onChange={handleonchange}
            rows="8"
          ></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert to UperCase
        </button>

        <button disabled={Text.length===0} className=" btn btn-primary mx-1" onClick={handleloclick} >Convert to LowerCase</button>

        <button disabled={Text.length===0} className="btn btn-primary mx-1" onClick={handleclear}>Tap to Clear Text</button>
      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 >You're text summary</h1>
        <p>{Text.split(" ").filter((element)=>{ return element.length!==0}).length}Words and {Text.length}Characters</p>
        <p>{0.008*Text.split(" ").filter((element)=>{ return element.length!==0}).length}minutes read</p>
        <h2>Preview</h2>
        <p>
          {Text}
        </p>
      </div>
    </>
  );
}
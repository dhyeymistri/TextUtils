import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
    const HandleUpClick = () => {
        // console.log('Clicked')
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", 'success');
    }
    const HandleLowClick = () => {
        // console.log('Clicked')
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", 'success');
    }
    const HandleClearClick = () => {
        // console.log("changed")
        setText("");
        props.showAlert("Text Box Cleared!", 'success');
    }
    const HandleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", 'success');
    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", 'success');
    }
    const HandleChange = (event) => {
        // console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    let j = 0;
    let i = text.split(/\s+/).length - 1;
    while (i >= 0) {
        if (text.split(/\s+/)[i] === "") j++;
        i = i - 1;
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'darkgrey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type="button" onClick={HandleUpClick} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
                <button disabled={text.length===0} type="button" onClick={HandleLowClick} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
                <button disabled={text.length===0} type="button" onClick={HandleClearClick} className="btn btn-primary mx-1 my-1">Clear Text</button>
                <button disabled={text.length===0} type="button" onClick={HandleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
                <button disabled={text.length===0} type="button" onClick={HandleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text details</h2>
                <p>{text.split(/\s+/).length - j} words and {text.length} characters</p>
                <p>{0.008 * (text.split(/\s+/).length - j)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length===0?"Nothing to preview":text}</p>
            </div>
        </>
    )
}

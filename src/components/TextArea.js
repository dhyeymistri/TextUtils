import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
    const HandleUpClick = () => {
        // console.log('Clicked')
        let newText = text.toUpperCase();
        setText(newText)

    }
    const HandleLowClick = () => {
        // console.log('Clicked')
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleClearClick = () => {
        // console.log("changed")
        setText("")
    }
    const HandleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const HandleChange = (event) => {
        // console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    let j = 0;
    let i = text.split(" ").length - 1;
    while (i >= 0) {
        if (text.split(" ")[i] === "") j++;
        i = i - 1;
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'darkgrey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" onClick={HandleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
                <button type="button" onClick={HandleLowClick} className="btn btn-primary mx-1">Convert to Lowercase</button>
                <button type="button" onClick={HandleClearClick} className="btn btn-primary mx-1">Clear Text</button>
                <button type="button" onClick={HandleCopy} className="btn btn-primary mx-1">Copy Text</button>
                <button type="button" onClick={HandleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text details</h2>
                <p>{text.split(" ").length - j} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - j)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length===0?"Enter something above to get it's preview here":text}</p>
            </div>
        </>
    )
}

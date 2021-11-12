import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
    const HandleUpClick = () => {
        // console.log('Clicked')
        let newText = text.toUpperCase()
        setText(newText)
    
    }
    const HandleLowClick = () => {
        // console.log('Clicked')
        let newText = text.toLowerCase()
        setText(newText)
    }

    const HandleChange = (event) => {
        // console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={HandleUpClick} className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button type="button" onClick={HandleLowClick} className="btn btn-primary mx-1">Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Text details</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

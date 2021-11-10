import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
    const HandleUpClick = () => {
        // console.log('Clicked')
        let newText = text.toUpperCase()
        setText(newText)
    }

    const HandleChange = (event) => {
        // console.log("changed")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={HandleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={HandleUpClick} className="btn btn-primary">Click here to Capitalize text</button>
        </div>
    )
}

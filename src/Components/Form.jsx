import React from 'react';
import { useState } from 'react';

const Form = () => {

const [comment, setComment] = useState('')
const [comments, addComment] = useState([])

const handleSubmit = e => {
    //prevent the page from load onClick
    e.preventDefault();
    addComment([...comments, comment])
    setComment('')
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Post a comment on the page?</p>
                <input
                type="text" 
                placeholder="Say Hi"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                ></input>
                <button type='submit'>skicka</button>
            </form>

            {/* Flytta till annat ställe ?      */}
            {[...comments].reverse().map((element, index) => {
                return (
                    <div key={index}>
                        <h2>{element}</h2>
                    </div>
                )
            })}
        </div>  
    );
}
export default Form;

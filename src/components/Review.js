import React from 'react';
import { IoStar } from "react-icons/io5";

export default function Review(props) {
    let arr = [];

    for (let i = 1; i <= props.rating; i++) {
        arr.push(i);
    }

    let arrTag = arr.map(function(element, index) {
        return <IoStar key={index}/>;
    });

    return (
        <div className='review'>
            <div className='rating mb-3 mb-sm-4'>
                {arrTag}
            </div>
            <p className='text'>{props.text}</p>
            <div className='gray fs-13 mt-2 mt-sm-3'>{props.author}, {props.date}</div>
        </div>
    );
}
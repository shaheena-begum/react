import React from 'react'

export default function ChildOfCompOne(props) {
    return (
        <div>
            <h1>ChildOfCompOne</h1>
            <h2>
            {props.somestate}
            </h2>
        </div>
    )
}

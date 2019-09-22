import React,{useState} from 'react'
import ChildOfCompOne from './ChildOfCompOne'

export default function ChildCompOne(props) {
    return (
        <div>
           <h1>compone</h1> 
           <h4>{props.somestate}</h4>
           
           <ChildOfCompOne somestate={props.somestate} />
           
    
        </div>
    )
}

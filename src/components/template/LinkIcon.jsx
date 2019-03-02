import React from 'react'
import './Links.scss'

export default props => {

    let classA = "icon"
    let classB = "imgi"
    const small = props.small
    // const placeholder=props.placeholder

    if (small) {
        classA = "icon small";
        classB = "imgi small";
    }

    return (
        <a href={props.link} className={classA} target="_blank" rel="noopener noreferrer"><img src={props.src} alt={props.title} className={classB} /> {props.placeholder}</a>
    )
}



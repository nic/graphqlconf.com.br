import React from 'react'
import './LinkIcon.scss'

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
        <a href={props.link} className={classA} ><img src={props.src} alt={props.title} className={classB} /> {props.placeholder}</a>
    )
}



import React from 'react'
import './Links.scss'

export default props => {

    let classA = "link-text"
    const small = props.small
    // const placeholder=props.placeholder

    if (small) {
        classA = "link-text small";
    }

    return (
        <a href={props.link} className={classA} target="_blank" rel="noopener noreferrer">{props.placeholder}</a>
    )
}


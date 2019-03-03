import React from 'react'
import './Links.scss'

export default props =>

        <a href={props.link} className={props.small ? "link-text small" : "link-text"} target={props.interno ? null : "_blank"} rel="noopener noreferrer">{props.placeholder}</a>

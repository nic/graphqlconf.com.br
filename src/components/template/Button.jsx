import React from 'react'
import './Button.scss'

export default props =>
        <button type="button" className={"btn btn-light btn-md btn-block bt" + props.num}>
            {props.text}
        </button>


import React from 'react'
import './LogoPatrocinio.scss'

export default props =>
<a href={"http://" + props.link}><img className="logop" src={props.src} alt={props.nome}/></a>
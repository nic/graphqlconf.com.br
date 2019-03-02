import React from 'react'
import './Card.scss'

export default props =>
<div className="card cardp col col-4 col-sm-3 col-md-2 col-lg-2">
    <img src={props.img} alt={props.nome} className="card-img-top"/>
    <div className="card-body">
    <h5 className="card-title">{props.nome}</h5>
    <p className="card-text">{props.desc}</p>
  </div>
</div>

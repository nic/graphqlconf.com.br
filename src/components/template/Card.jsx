import React from 'react'
import './Card.scss'

export default props => {

  const buttonLink = <span class="d-inline-block" data-toggle="popover" data-content="Disabled popover" ><a href={props.link}
    className={props.desativo ? "btn btn-md btn-block disabled bt" + props.num : "btn btn-md btn-block bt" + props.num}
    target={props.interno ? null : "_blank"}
    rel="noopener noreferrer"
    role="button"
    aria-disabled={props.desativo ? "true" : ""} >{props.botao}</a>
  </span>


  return (
    <div className="card cardp col col-4 col-sm-3 col-md-2 col-lg-2">
      <img src={props.img} alt={props.nome} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.nome}</h5>
        <p className="card-text">{props.desc}</p>
        {props.botao ? buttonLink : null}
      </div>
    </div>
  )
}


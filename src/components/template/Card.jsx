import React from 'react'
import './Card.scss'

export default props =>
<div className="card cardp text-white">
    <img src={props.img} alt={props.nome} className="card-img"/>
    <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>

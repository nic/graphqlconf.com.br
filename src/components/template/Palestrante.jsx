import React from 'react'
import Card from './Card'

import logo from '../../assets/imgs/teste.jpg'

export default props =>
<div className="palestrante col-md-12">
<div className="row">
    <div className="col">
        <h1>Palestrantes</h1>
    </div>
</div>
<div className="row mt-5">
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
        <Card img={logo} nome="nome do nego" />
</div>
</div>
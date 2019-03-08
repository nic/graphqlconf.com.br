import React from 'react'
// import LogoP from './LogoPatrocinio'
// import logo from '../../assets/imgs/vagas.jpg'
import LinkText from './Link'

export default props =>
<div className="patrocinio col-md-12 mt-5">
<div className="row">
    <div className="col-12">
        <h1>Patrocínio</h1>
        <div className="mt-4">
            {/* <LogoP nome="vagas" link="www.vagas.com.br" src={logo} /> */}
            <p>Quer nos ajudar a fazer uma conferência incrível? <LinkText link="mailto:graphqlconfbr@gmail.com" placeholder="Entre em contato conosco" /></p>
        </div>
    </div>
</div>
</div>

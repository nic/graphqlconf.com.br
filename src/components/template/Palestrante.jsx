import React from 'react'
import Card from './Card'

import logo from '../../assets/imgs/teste.jpg'

export default props =>
        <div className="row palestrante justify-content-center">
            <div className="col col-12">
                <h1>Palestrantes</h1>
                <div className="card-columns mt-4 justify-content-center justify-content-arround row">
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                    <Card img={logo} nome="nome do nego" desc="test test test test test"/>
                </div>
            </div>
        </div>
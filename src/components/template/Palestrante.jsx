import React from 'react'
import Card from './Card'

import Profile from '../../assets/imgs/profile.jpg'



export default props =>
    <div className="row palestrante justify-content-center">
            <div className="col col-12">
                <h1>Palestrantes</h1>
                <div className="card-columns mt-4 justify-content-center justify-content-arround row">
                    <Card img={Profile} 
                    nome="Estamos aguardando para colocar sua foto aqui" 
                    desc='Palestrante estamos aguardando sua submissão no Call4paper'
                    num={1}
                    botao="Submit Call4Papers"
                    link="http://call4papers.com"
                    desativo="true"/>
                    
                </div>
            </div>
        </div>

        
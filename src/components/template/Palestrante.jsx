import React from 'react'
import Card from './Card'

import Profile from '../../assets/imgs/profile.jpg'

export default props =>

    <div className="row palestrante justify-content-center">
        <div className="col col-12 row justify-content-center">
            <h1>Palestrantes</h1>
            <div className="col col-12 mt-4 row">
                <Card img={Profile}
                    nome="Estamos aguardando para colocar sua foto aqui"
                    // desc='Palestrante estamos aguardando sua submissão no Call4paper'
                    num={1}
                    botao="Submit Call4Papers"
                    link="https://goo.gl/forms/rytYbIveDKadRFsj2"
                />

            </div>
        </div>
    </div>
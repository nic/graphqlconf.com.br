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
                    link="http://forms.google.com"
                    desativo="true"
                    alertmessenge="Acalme-se palestrante! Em breve iremos liberar o Call4papers, enquanto isso nos acompanhe nas "
                    alertlink="redes sociais."
                    alerthref="#redes"
                />

            </div>
        </div>
    </div>
import React from 'react'
import Conteudo1 from './Conteudo1'
import Conteudo2 from './Conteudo2'
import Palestrante from './Palestrante'
// import Button from './Button'
import Patrocinio from './Patrocinador'
import Comunidade from './Comunidade'
import Ingressos from './Ingressos'

export default props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="row justify-content-center">
                <div className="p-3 mt-1 col col-12 col-md-8 col-lg-6" id="evento">
                    <Conteudo1 />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="p-3 mt-1 col col-12 col-md-8 col-lg-6" id="local">
                    <Conteudo2 />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-12 text-center container-fluid" id="palestrante">
                    <Palestrante />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-8 text-center col-sm-6 col-md-6 col-lg-4 mt-5" id="ingressos">
                    {/* <br />
                    <Button text="comprar ingresso" num={1} /> */}
                    <Ingressos />
                </div>
            </div>
            <div className="row">
                <div className="col col-12 text-center" id="patrocinio">
                    <Patrocinio />
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col col-8 col-sm-8 col-md-7 col-lg-6 text-center p-3" id="contato">
                    <Comunidade />
                </div>
            </div>
        </main>
  
    </React.Fragment>
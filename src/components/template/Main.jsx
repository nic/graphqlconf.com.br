import React from 'react'
import Conteudo1 from './Conteudo1'
import Conteudo2 from './Conteudo2'
import Palestrante from './Palestrante'
import Button from './Button'
import Patrocinio from './Patrocinador'
import Comunidade from './Comunidade'

export default props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="row">
                <div className="p-3 mt-1 col col-md-12 col-lg-6">
                    <Conteudo1 />
                </div>
                <div className="p-3 mt-1 col col-md-12 col-lg-6">
                    <Conteudo2 />
                </div>
            </div>
            <div className="row">
                <div className="col col-12 text-center">
                    <Palestrante />
                </div>
            </div>
            <div className="row justify-content-center">
                {/* <div className="col-2 col-sm-3 col-ls-4"></div> */}
                <div className="col col-8 text-center col-sm-6 col-md-6 col-lg-4">
                    <br />
                    <Button text="comprar ingresso" num={1} />
                    <br />
                    <Button text="patrocinar" num={2} />
                    <br />
                    <Button text="palestrar" num={3} />
                </div>
                {/* <div className="col-2 col-sm-3 col-ls-4"></div> */}
            </div>
            <div className="row">
                <div className="col col-12 text-center">
                    <Patrocinio />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-8 col-sm-8 col-md-7 col-lg-6 text-center p-3">
                    <Comunidade />
                </div>
            </div>
        </main>
    </React.Fragment>
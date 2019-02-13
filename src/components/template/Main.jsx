import React from 'react'
import Conteudo1 from './Conteudo1'
import Conteudo2 from './Conteudo2'
import Palestrante from './Palestrante'

export default props =>
    <React.Fragment>
        <main className="content container-fluid">
        <div className="row">
        <div className="p-3 mt-3 col-md-12 col-lg-6">
                <Conteudo1 />
            </div>
            <div className="p-3 mt-3 col-md-12 col-lg-6">
                <Conteudo2 />
            </div>
        </div>
            <div className="row">
            
            </div>
    </main>
    </React.Fragment>
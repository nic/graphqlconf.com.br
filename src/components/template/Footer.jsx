import React from 'react'
import IconA from './LinkIcon'
import LinkText from './Link'
import Reactconf from '../../assets/imgs/atomo.svg'

export default props =>
    <footer className="footer justify-content-center">
        <div className="row justify-content-center justify-content-between align-items-center">
        {/* <div className="col-12 text-center">
        
        </div> */}
        
            <div className="col col-4 text-center">
            
            <ul>
  <li><LinkText link="https://" small="true" placeholder="Código de conduta" /></li>
  <li><LinkText link="https://" small="true" placeholder="Evento" /></li>
  <li><LinkText link="https://" small="true" placeholder="Palestrantes" /></li>
  <li><LinkText link="https://" small="true" placeholder="Ingressos" /></li>
  <li><LinkText link="https://" small="true" placeholder="Patrocinadores" /></li>
  <li><LinkText link="https://" small="true" placeholder="Contato" /></li>
</ul>
            </div>
            <div className="col col-4 text-center">
            <small>Veja também:</small>
            <br/>
                <IconA link="https://reactconf.com.br/" src={Reactconf} title="ReactConfBR" placeholder="React Conf BR" />
                <br />
                <small>Mais uma conferência da Átomos Nativos, Grafos e Retransmissões</small>
            </div>
            <div className="col col-4 text-center">
            <h4>#graphqlconfbr</h4>
                    <small>
                    Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                    <LinkText link="https://www.quanttico.com.br" placeholder=" Quanttico" />
                </small>
                <br/>
                    <small>Criado com: <LinkText link="https://github.com/facebookincubator/create-react-app/" placeholder="create-react-app" />
                    </small>
            </div>
        </div>

    </footer>
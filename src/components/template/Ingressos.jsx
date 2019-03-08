import React from 'react'
import './Ingressos.scss'
import { Alert } from 'react-bootstrap'

class Ingresso extends React.Component {

	constructor(props) {
		super(props);
		this.state = { show: false }
	}

    render () {

      const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });

      return(
        <div>
        
      <a href="#ingressos" className="grow" onClick={handleShow}>
        <div className="card border-dark mb-3">
          {/* <div class="card-header">Ingressos</div> */}
          <div className="card-body">
            <h5 className="card-title">Ingressos</h5>
            <p className="card-text">Em breve os ingressos estarão disponíveis para compra.</p>
          </div>
        </div>
      </a>
      
      <Alert dismissible show={this.state.show} onClose={handleHide} variant="info" onClick={handleHide}>
      Acalme-se jovem! Quer comprar logo? Acompanhe-nos pelas <Alert.Link href="#redes">redes sociais</Alert.Link>.
        </Alert>
      </div>
      
      )
    }
  }

  export default Ingresso

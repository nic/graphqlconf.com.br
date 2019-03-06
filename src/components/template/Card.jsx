import React from 'react'
import './Card.scss'
// import Button from './Button'
import './Button.scss'
import { Alert } from 'react-bootstrap'


class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  render() {

    const handleHide = () => this.setState({ show: false })
    const handleShow = () => this.setState({ show: true })

    const buttonLink = <span className="d-inline-block" onClick={handleShow}><a href={this.props.link}
      className={this.props.desativo ? "btn btn-md btn-block disabled bt" + this.props.num : "btn btn-md btn-block bt" + this.props.num}
      target={this.props.interno ? null : "_blank"}
      rel="noopener noreferrer"
      role="button"
      aria-disabled={this.props.desativo ? "true" : ""}
    >{this.props.botao}</a>
    </span>

    return (
      <div className="col col-12 m-0 justify-content-center justify-content-arround align-items-center row">
        <div className="card cardp col col-10 col-sm-6 col-md-3 col-lg-2" >
          <img src={this.props.img} alt={this.props.nome} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.nome}</h5>
            <p className="card-text">{this.props.desc}</p>
            {this.props.botao ? buttonLink : null}
          </div>
        </div>
        <div class="w-100"></div>
        {this.props.alertmessenge ? <div className="row col col-8 justify-content-center"><Alert dismissible show={this.state.show} variant="info" onClick={handleHide}>{this.props.alertmessenge}<Alert.Link href={this.props.alerthref}>{this.props.alertlink}</Alert.Link></Alert></div> : null}
      </div>


    )
  }
}

export default Card
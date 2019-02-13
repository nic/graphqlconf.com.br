import React from 'react'
import logo from '../../assets/imgs/Logo.png'
import { Link } from 'react-router-dom'
import './Logo.scss'

export default props =>
    <header className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </header>
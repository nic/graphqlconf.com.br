import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Main from '../components/template/Main'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Main />
            <Footer />
        </div>
    </HashRouter>

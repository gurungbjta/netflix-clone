import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import styled from 'styled-components'
import LoginForm from '../components/login/LoginForm'
import LoginFoooter from '../components/login/LoginFooter'
import {generateMedia} from 'styled-media-query'

export default class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo" />
                </div>
                <LoginForm />
                <LoginFoooter />
            </div>
        ) 
    }
}

//media
const customMedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
})

// logo
const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%; // space of 11% on its left
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan('tablet')`
        top: 45%;
        left: 23%
    `}
`;

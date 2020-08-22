import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import FBLogo from '../../images/fb-logo.png'
import {generateMedia} from 'styled-media-query'

const regexp = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);

const iniState = {
    checked: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

export default class LoginForm extends Component {
    state = iniState;

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    validate = () => {
        let inputError = false; // initially there are no input errors
        const errors = { 
            emailError: '',
            passwordError: ''
        }

        if(!this.state.email){ // if there's no email
            inputError = true;
            errors.emailError = 'Please enter a valid email'
        }
        else if (!this.state.email.match(regexp)){ // if email doesn't follow regex pattern
        inputError = true;
            errors.emailError = (
                <span style={{color: 'red'}}>Your email address must be valid</span>
            )
        }

        if(this.state.password.length < 4){
            inputError = true;
            errors.passwordError = "Your password must contain between 4 and 60 characters"
        }

        // add all errors to state
        this.setState({ 
            ...errors
        })

        return inputError;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const err = this.validate();
        if(!err){ // if there are no error after validation, set iniState as state
            this.setState(iniState);
        }
    }

    handleCheckBox = (e)=> {
        this.setState({
            checked: e.target.checked
        })
    }
 
    render() {
        return (
            <FormContainer>
                <div className="form-container">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-container"> 
                            <input className={this.state.emailError ? "input-empty input-error" : "input-empty"} type="email" onChange={this.handleEmailChange} value={this.state.email} required />
                            <label>Email or Phone Number</label>
                            <span style={{color: '#db7302'}}>{this.state.emailError}</span>
                        </div>
                        <div className="input-container"> 
                            <input className={this.state.passwordError ? "input-empty input-error" : "input-empty"} type="password" onChange={this.handlePasswordChange} value={this.state.password} required />
                            <label>Password</label>
                            <span style={{color: '#db7302'}}>{this.state.passwordError}</span>
                        </div>
                        <div className="input-container"> 
                            <Button type="submit" onClick={e => this.onSubmit(e)}>Sign In</Button>
                        </div>
                        <label className="checkbox-container">
                            Remember me
                            <input type="checkbox" defaultChecked={this.state.checked} onChange={this.handleCheckBox} />
                            <span className="checkmark"></span>
                        </label>
                        <Link to="/" className="need-help">
                            Need Help?
                        </Link>
                        <div className="bottom-form">
                            <img src={FBLogo} alt="facebook" />
                            <Link to="/" className="login-fb-text">
                                Login with Facebook
                            </Link>
                            <br />
                            <br />
                            <span style={{color: '#999'}}>New to Netflix?</span>&nbsp; {/* nbsp means little space */}
                            <Link to="/" className="sign-up-text">
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </FormContainer>
        )
    }
}

//media
const customMedia = generateMedia({
    tablet: '640px'
})

// form-container
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;
    ${customMedia.lessThan('tablet')`
        border-bottom: 0.9px solid #999;
    `}

    .form-container{
        background: rgba(0,0,0,0.8); // faint transparent black
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
        ${customMedia.lessThan('tablet')`
            padding: 0.6rem;
            height: 35rem;
        `}
    }

    .input-container{
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }

    .input-empty{
        color: #fff; // white
        background: #333; // grey
        border: 0;
        border-radius: 0.25rem; // curved edges
        height: 3rem;
        padding: 0.9rem 1.25rem 0; // top, lr, bottom
    }

    form div label{
        position: absolute; // label will be inside box
        top: 0.625rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a; // grey
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div{
        position: relative;
    }

    // when clicked on input, font-size of label inside of input will decrease
    input:focus ~ label{
        top: 0.4375rem;
        font-size: 0.7rem;
    }

    input:focus{
        outline: none; // no highlighted outline when clicked
    }

    .input-error{
        border-bottom: 1px solid #db7302;
    }

    .checkbox-container{
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        color: #999; //grey
        font-size: 0.9rem;
        cursor: pointer;
    }

    .checkbox-container input{
        display: none;
    }

    .checkbox-container .checkmark{
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;
    }

    // for tick/checked checkmark sign
    .checkbox-container input:checked + .checkmark:after{
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000; // upper part of tick
        border-bottom: 2px solid #000; //bottom part of tick
        top: 25%; //gap of 25% on top
        left: 21%; //gap of 21% on left
        transform: rotate(-45deg); // rotate the tick sign to make it slanted
    }

    .need-help{
        text-decoration: none;
        color: #828282; //grey
        margin-left: 6.6rem;
        font-size: 0.9rem;
        &:hover{
            text-decoration: underline;
        }
        ${customMedia.lessThan('tablet')`
            padding:13rem;
        `}
    }

    //bottom form
    .bottom-form img{
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0; //top right bottom left
    }

    .login-fb-text{
        color: #828282; //grey
        font-size: 0.9rem;
    }

    .bottom-form{
        position: absolute;
        bottom: 0; // all the way to the bottom
        margin-bottom: 4rem; // margin of 4rem on the bottom
    }

    .sign-up-text{
        font-size: 1.1rem;
        color: #fff;
        &:hover{
            text-decoration: underline;
        }
    }
`;

// Button
const Button = styled.button`
    color: #fff;
    background: rgba(229, 9, 20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity 0.2s ease-in
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
`;
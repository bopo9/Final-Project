import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";

class signUp extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            nickname: ''
        };
    }

    componentDidMount() {
        document.title = 'ATOM - sign-up'
    }

    onLoginInput = e => {
        this.setState({
            email: e.target.value
        });
    };

    onPasswordInput = e => {
        this.setState({
            password: e.target.value
        });
    };

    onNicknameInput = e => {
        this.setState({
            nickname: e.target.value
        });
    };

    onFirstNameInput = e => {
        this.setState({
            firstName: e.target.value
        });
    };

    onLastNameInput = e => {
        this.setState({
            lastName: e.target.value
        });
    };

    onFormSubmit = () => {
        this.props.onSignUp(this.state, this.props.onLoginSaveState);
        <Redirect push to={'sign-in'} />
    };

    render() {

        return (
            <div className={'auth'}>
                <div className="auth__form form_auth pixelBorder">

                    <label className={'auth__label'} htmlFor={'emailInput'}>Email</label>
                    <input onInput={this.onLoginInput} className={'auth__input input_auth'}  type="email" id={'emailInput'} required={true}/>

                    <label htmlFor={'firstNameInput'}>First name</label>
                    <input onInput={this.onFirstNameInput} className={'auth__input input_auth'} type="text" id={'firstNameInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Last name</label>
                    <input onInput={this.onLastNameInput} className={'auth__input input_auth'} type="text" id={'passwordInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Nickname</label>
                    <input onInput={this.onNicknameInput} className={'auth__input input_auth'}  type="text" id={'passwordInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Password</label>
                    <input onInput={this.onPasswordInput} className={'auth__input input_auth'} type="password" id={'passwordInput'} required={true}/>
                    <div className={'auth__footer'}>
                        <Link className={'auth__link link__auth'} to={'/sign-in'}>Sign-in</Link>

                        <button onClick={this.onFormSubmit} className={'auth__btn btn-md btn-red'}>Sign in</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default signUp;
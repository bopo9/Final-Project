import React, {Component} from "react";
import {Link} from "react-router-dom";

class Login extends Component{
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount(){
        document.title = "ATOM - sign-in"
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

    onFormSubmit = () => {
        this.props.onSignIn(this.state, this.props.onLoginSaveState);
    };

    render() {
        return (
            <div className={'auth'}>
                <div className="auth__form form_auth pixelBorder">
                    <label className={'auth__label'} htmlFor={'authInput'}>Email</label>

                    <input onInput={this.onLoginInput} className={'auth__input input_auth'} name={'email'} type="text" id={'loginInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Password</label>

                    <input onInput={this.onPasswordInput} className={'auth__input input_auth'} name={'password'} type="password" id={'passwordInput'} required={true}/>

                    <div className={'auth__footer'}>
                        <Link className={'auth__link link__auth'} to={'/sign-up'}>Sign-up</Link>

                        <button onClick={this.onFormSubmit} className={'auth__btn btn-md btn-red'}>Sign in</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;
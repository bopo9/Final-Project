import React, {Component} from "react";

class signUp extends Component{
    render() {
        return (
            <div className={'auth'}>
                <div className="auth__form form_auth pixelBorder">
                    <label className={'auth__label'} htmlFor={'authInput'}>Email</label>

                    <input className={'auth__input input_auth'} name={'email'} type="email" id={'loginInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>First name</label>

                    <input className={'auth__input input_auth'} name={'password'} type="text" id={'passwordInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Last name</label>

                    <input className={'auth__input input_auth'} name={'password'} type="text" id={'passwordInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Nickname</label>

                    <input className={'auth__input input_auth'} name={'password'} type="text" id={'passwordInput'} required={true}/>

                    <label htmlFor={'passwordInput'}>Password</label>

                    <input className={'auth__input input_auth'} name={'password'} type="password" id={'passwordInput'} required={true}/>

                    <button className={'auth__btn btn-md btn-red'}>Sign in</button>
                </div>
            </div>
        );
    }
}

export default signUp;
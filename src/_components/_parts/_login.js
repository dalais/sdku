import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const _login = () => {

    const history = useHistory();
    const inputStyle = {
        border: '1px solid #cccccc',
        borderRadius: '3px',
        WebkitBorderRadius: '3px',
        MozBorderRadius: '3px',
        background: '#ffffff !important',
        outline: 'none',
        height: '25px',
        width: '150px',
        color: 'darkslategray',
        fontSize: '15px',
        fontFamily: 'Tahoma'
    };

    const errStyle = {
        color: 'red'
    };
    //let userData = {};
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.email.value === '') {
            event.target.email.style.border = '1px solid red';
            setTimeout(() =>
                document.querySelector("input[name=email]").style.border = '1px solid #cccccc',
                2000)
        }
        if (event.target.password.value === '') {
            event.target.password.style.border = '1px solid red';
            setTimeout(() =>
                document.querySelector("input[name=password]").style.border = '1px solid #cccccc',
                2000)
        }
        if (event.target.email.value !== '' && event.target.password.value !== '') {
            const loginDataObj = {
                email: event.target.email.value,
                password: event.target.password.value,
                remember_me: event.target.remember_me.checked
            };
            axios.post('/api/auth/login', loginDataObj)
                .then(res => {
                    if (res.data.error === 0) {
                        //userData = res.data.data;
                        history.push("/admin")
                    }
                    if (res.data.error > 0) {
                        let err = document.getElementsByClassName("login-error")[0];
                        document.querySelector("input[name=email]").value = '';
                        document.querySelector("input[name=password]").value = '';
                        document.querySelector("input[name=remember_me]").checked = false;
                        err.innerText = res.data.err_mesgs[0].error;
                        setTimeout(()=>err.innerText = "", 3000)
                    }
                })

        }
    };

    const onInput = (event) => {
        event.preventDefault();
        if (event.target.style.border === '1px solid red') {
            event.target.style.border = '1px solid #cccccc'
        }
    };

    const Email = (
        <input type="text" name="email" style={inputStyle} onInput={onInput} placeholder="email"/>
    );
    const Password = (
        <input type="password" name="password" style={inputStyle} onInput={onInput} placeholder="password"/>
    );
    const RememberMe = (
        <input type="checkbox" name="remember_me"/>
    );
    const SubmitBtn = (<button type="submit">Log In</button>);
    const Err = (<span className="login-error" style={errStyle}/>);
    const ErrDiv = (<div>&nbsp;{Err}</div>);

    const LoginForm = (
        <form onSubmit={handleSubmit}>
            {ErrDiv}
            <br/>
            {Email}
            <br/>
            <br/>
            {Password}
            <br/>
            <br/>
            Remember Me: {RememberMe}
            <br/>
            <br/>
            {SubmitBtn}
        </form>
    );


    return (
        <div className="log-in">
            <h1>Login</h1>
            {LoginForm}
        </div>
    );
};

export default _login;

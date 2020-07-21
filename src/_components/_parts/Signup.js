import React from 'react';
import {useHistory} from "react-router-dom";
import {iAx} from "../../index";

const Signup = () => {

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

    const handleSubmit = (event) => {
        let emailErr = document.getElementsByClassName("email-error")[0];
        let passwErr = document.getElementsByClassName("password-error")[0];
        let errConfirm = document.getElementsByClassName("confirm-error")[0];
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
        if (event.target.confirm.value === '') {
            event.target.confirm.style.border = '1px solid red';
            setTimeout(() =>
                    document.querySelector("input[name=confirm]").style.border = '1px solid #cccccc',
                2000)
        }

        if (event.target.email.value !== ''
            && event.target.password.value !== ''
            && event.target.confirm.value !== '') {

            if (event.target.password.value !== event.target.confirm.value) {
                errConfirm.innerText = "Passwords don't match";
            } else {
                const registerDataObj = {
                    email: event.target.email.value,
                    password: event.target.password.value
                };
                iAx.post('auth/register', registerDataObj)
                    .then(res => {
                        if (res.data.error === 0) {
                            history.push("/greeting")
                        }
                        if (res.data.error > 0) {
                            let errData = res.data.err_mesgs;

                            for (let i = 0; i < errData.length; i++) {
                                if (errData[i].field.toLowerCase() === "email") {
                                    emailErr.innerText = errData[i].message
                                }
                                if (errData[i].field.toLowerCase() === "password") {
                                    passwErr.innerText = errData[i].message
                                }
                                if (errData[i].field.toLowerCase() !== "email" && errData[i].field.toLowerCase() !== "password") {
                                    emailErr.innerText = errData[i].message
                                }
                            }


                        }
                    })
            }
            setTimeout(() => {
                emailErr.innerText = "";
                passwErr.innerText = "";
                errConfirm.innerText = "";
            }, 3000)

        }
    };

    const onInput = (event) => {
        let password = document.querySelector('input[name=password]');
        let confirm = document.querySelector('input[name=confirm]');
        event.preventDefault();
        if (event.target.style.border === '1px solid red') {
            event.target.style.border = '1px solid #cccccc'
        }
        if (event.target.name === 'password') {
            confirm.value = "";
            confirm.style.border = '1px solid #cccccc';
            if (event.target.value.length < 6) {
                event.target.style.border = '1px solid red'
            }
            if (event.target.value.length >= 6) {
                event.target.style.border = '1px solid green'
            }
        }
        if (event.target.name === 'confirm') {
            if (event.target.value === password.value) {
                event.target.style.border = '1px solid green'
            }
            if (event.target.value !== password.value || event.target.value === '') {
                event.target.style.border = '1px solid red'
            }
        }
    };

    const Email = (
        <input type="text" name="email" style={inputStyle} onInput={onInput} placeholder="Email"/>
    );
    const Password = (
        <input type="password" name="password" style={inputStyle} onInput={onInput} placeholder="Password"/>
    );

    const RepeatPassword = (
        <input type="password" name="confirm" style={inputStyle} onInput={onInput} placeholder="Repeat password"/>
    );

    const SubmitBtn = (<button type="submit">Sign up</button>);
    const Err = field => (<div>&nbsp;<span className={field} style={errStyle}/></div>);

    const SingupForm = (
        <form onSubmit={handleSubmit}>
            <br/>
            {Err("email-error")}
            {Email}
            <br/>
            <br/>
            {Err("password-error")}
            {Password}
            <br/>
            <br/>
            {Err("confirm-error")}
            {RepeatPassword}
            <br/>
            <br/>
            {SubmitBtn}
        </form>
    );
    return (
        <div className="sign-up">
            <h1>Sign up</h1>
            {SingupForm}
        </div>
    );
};

export default Signup;

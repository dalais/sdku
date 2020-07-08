import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const _login = () => {

    const history = useHistory();
    const inputStyle = {
        border: '1px solid #cccccc', //цвет рамки
        borderRadius: '3px', //закругление углов (общее)
        WebkitBorderRadius: '3px', //закругление углов (Google Chrome)
        MozBorderRadius: '3px', //закругление углов (FireFox)
        background: '#ffffff !important', // желательно прописывать, так как в Chrome при сохранных данных оно может быть желтым
        outline: 'none', // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
        height: '25px', // высота на свое усмотрение
        width: '150px', // ширина на свое усмотрение
        color: 'darkslategray', //цвет шрифта в обычном состоянии
        fontSize: '15px', // Размер шрифта
        fontFamily: 'Tahoma' // Стиль шрифта
    };

    const handleSubmit = (event) => {
        let userData = {};
        event.preventDefault();
        if (event.target.email.value === '') {
            event.target.email.style.border = '1px solid red';
        }
        if (event.target.password.value === '') {
            event.target.password.style.border = '1px solid red';
        }
        if (event.target.email.value !== '' && event.target.password.value !== '') {
            const loginDataObj = {
                email: event.target.email.value,
                password: event.target.password.value,
                remember_me: event.target.remember_me.checked
            };
            axios.post(`api/auth/login`, loginDataObj)
                .then(res => {
                    if (res.data.error === 0) {
                        userData = res.data.data;
                    }
                    console.log(res.data);
                    console.log(userData);
                })

        }
        if (userData !== null){
            history.push("/admin")
        }
    };

    const onInput = (event) => {
        event.preventDefault();
        if (event.target.style.border === '1px solid red') {
            event.target.style.border = '1px solid #cccccc'
        }
    };

    const email = (
        <input type="text" name="email" style={inputStyle} onInput={onInput} placeholder="email"/>
    );
    const password = (
        <input type="password" name="password" style={inputStyle} onInput={onInput} placeholder="password"/>
    );
    const rememberMe = (
        <input type="checkbox" name="remember_me"/>
    );
    const btn = (<button type="submit">Log In</button>);


    const loginForm = (
        <form onSubmit={handleSubmit}>
            {email}
            <br/>
            <br/>
            {password}
            <br/>
            <br/>
            Remember Me: {rememberMe}
            <br/>
            <br/>
            {btn}
        </form>
    );


    return (
        <div className="log-in">
            <h1>Login</h1>
            <br/>
            <br/>
            {loginForm}
        </div>
    );
};

export default _login;

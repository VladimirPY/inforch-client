import React from 'react';
import ReactDOM from 'react-dom';
import AuthFrame from '../Auth/Main.js';
import Input from '../UI/Input';
import Avatar from '../Avatar/Avatar';
import logo from '../../logo.json';
import './HeaderAuth.scss';

export default function Header(props){

    function showAuthForm(event){
        ReactDOM.render(
            <AuthFrame formType = {event.target.name}/>,
            document.getElementById('root')
        );
    }

    function handleKeydown(event){
        console.log('asdasd');
    }
    
    return (
        <header className = 'header-auth flex j-space-between a-i-center back-dark'>
            <Avatar />
            <div className = 'btns-block flex j-center'>
                <img className = 'border border-orange' src = {process.env.PUBLIC_URL + "/images/home_btn.svg"}/>
                <img className = 'border border-orange' src = {process.env.PUBLIC_URL + "/images/hot_btn.svg"}/>
                <img className = 'border border-orange' src = {process.env.PUBLIC_URL + "/images/plus_btn.svg"}/>

                <Input inputAttributes = {{type : 'text', class : 'border-orange'}} onKeydown = {handleKeydown}/>
            </div>
        </header>
    );
}
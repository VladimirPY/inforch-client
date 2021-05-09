import React from 'react';
import ReactDOM from 'react-dom';
import AuthFrame from '../Auth/Main.js';
import logo from '../../logo.json';
import '../Header/HeaderNotAuth.scss';

export default function HeaderNotAuth(props){

    function showAuthForm(event){
        ReactDOM.render(
            <AuthFrame formType = {event.target.name}/>,
            document.getElementById('root')
        );
    }
    
    return (
        <header className = 'header-not-auth flex j-space-between a-i-center'>
            <div className = 'header-logo flex column j-center'>
                <img src = {process.env.PUBLIC_URL + logo.main}/>
                <span>Lorem ipsum dolor</span>
            </div> 

            <div className = 'btns-block flex j-space-between'>
                <button name = 'login' className = 'btn dark' onClick = {showAuthForm}>LOG IN</button>
                <button name = 'signin' className = 'btn orange' onClick = {showAuthForm}>SIGN IN</button>
            </div>
        </header>
    );
}
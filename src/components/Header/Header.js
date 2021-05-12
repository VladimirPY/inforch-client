import React, {useState, useRef, useEffect} from 'react';
import Input from '../UI/Input';
import ReactDOM from 'react-dom';
import AuthFrame from '../Auth/Main.js';
import Avatar from '../Avatar/Avatar';
import './Header.scss';
import logo from '../../logo.json';
import AuthBtns from '../Auth/AuthButtons';

export default function HeaderAuth(props){
    const [isGuest, setIsGuest] = useState(false);

    useEffect(() => {
        setIsGuest(props.isGuest);
    });
    const guest_block = (
        <div className = 'btns-block flex j-center'>
            <button name = 'login' className = 'btn light' onClick = {showAuthForm}>LOG IN</button>
            <button name = 'signin' className = 'btn orange' onClick = {showAuthForm}>SIGN IN</button>
        </div>
    );

    const auth_block = (
        <div className = 'btns-block flex  j-space-between'>
            <img className = 'border orange' src = {process.env.PUBLIC_URL + "/images/home_btn.svg"}/>
            <img className = 'border orange' src = {process.env.PUBLIC_URL + "/images/hot_btn.svg"}/>
            <img className = 'border orange' src = {process.env.PUBLIC_URL + "/images/plus_btn.svg"}/>
            <img className = 'border orange ' src = {process.env.PUBLIC_URL + "/images/search_light.svg"}/>
            <Avatar />
        </div> 
    );
    
    function showAuthForm(event){
        ReactDOM.render(
            <AuthFrame formType = {event.target.name}/>,
            document.getElementById('root')
        );
    }

    function startSearch(event){
        if(event.key !== 'Enter'){
            console.log('nenen');
        }
        console.log('asdasd');
    }
    
    return (
        <header className = 'header-auth flex j-space-between a-i-center back-dark'>
            <div class = 'flex  j-space-between'>
                <img src = {process.env.PUBLIC_URL + logo.new}/>
                <Input inputAttributes = {{className : "border orange"}}/>
            </div>
            {isGuest ? <AuthBtns/> : auth_block}
        </header>
    );
}
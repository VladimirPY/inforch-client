import React, {useState, useRef, useEffect} from 'react';
import Input from '../UI/Input';
import Avatar from '../Avatar/Avatar';
import './HeaderAuth.scss';

export default function HeaderAuth(props){
    function startSearch(event){
        if(event.key !== 'Enter'){
            console.log('nenen');
        }
        console.log('asdasd');
    }
    
    return (
        <header className = 'header-auth flex j-space-between a-i-center back-dark'>
            <Avatar />
            <div className = 'btns-block flex j-center'>
                <img className = 'border border-orange' src = {process.env.PUBLIC_URL + "/images/home_btn.svg"}/>
                <img className = 'border border-orange' src = {process.env.PUBLIC_URL + "/images/hot_btn.svg"}/>
                <img className = 'border border-orange' src = {process.env.PUBLIC_URL + "/images/plus_btn.svg"}/>
                <img className = 'border border-orange ' src = {process.env.PUBLIC_URL + "/images/search_light.svg"}/>

                <Input inputAttributes = {{type : 'text', className : 'border-orange'}}/>
            </div>
        </header>
    );
}
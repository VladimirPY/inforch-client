import React from 'react';
import logo from '../logo.json';

export default function HomeIntro(props){

    return (
        <div id = 'home-page-intro'>
            <img src = {project.env.PUBLIC_URL + logo.white}/>
            <div className = 'intro-block'>
                <div className = 'text-intro'>

                </div>
                <div className = 'btns-block flex j-center'>
                    <button name = 'login' className = 'btn light' onClick = {showAuthForm}>LOG IN</button>
                    <button name = 'signin' className = 'btn orange' onClick = {showAuthForm}>SIGN IN</button>
                </div>
            </div>
        </div>
    );
}
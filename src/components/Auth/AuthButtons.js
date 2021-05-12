import React from 'react';
import AuthFrame from '../Auth/Main';
import ReactDOM from 'react-dom';
import './AuthButtons.scss';


export default function AuthButtons(props){

    function showAuthForm(event){
        let popup = document.getElementById('auth-popup')
        let props_for_frame = {
            formType : event.target.name,
            closeEvent : closePopup
        };
        ReactDOM.render(
            <AuthFrame {...props_for_frame}/>,
            popup
        );
        popup.classList.remove('hide');
    }
    
    function closePopup(event){
        let popup = document.getElementById('auth-popup');
        //TODO: pretty disapear and apear
        popup.classList.add('hide');
        ReactDOM.unmountComponentAtNode(popup);
    }

    return (
        <div className = 'auth-btns-block flex j-center'>
            <button name = 'login' className = 'btn light' onClick = {showAuthForm}>LOG IN</button>
            <button name = 'signin' className = 'btn orange' onClick = {showAuthForm}>SIGN IN</button>
            <div id = "auth-popup" className = 'hide'></div>
        </div>
    );
}

import React from 'react';
import './Avatar.scss'

export default function Avatar(props){
    const img = <img id = 'avatar-btn' className = 'avatar border border-orange back-light' src = {process.env.PUBLIC_URL + "/images/photo.svg"}/>;
    const profile_options = (
        <nav id = 'profile-options' class = 'hide back-light'>
            1<br/>
            1<br/>
            1<br/>
        </nav>
    );
    window.addEventListener('click', showOptionList);

    function showOptionList(event){
        let btn = document.getElementById('avatar-btn');
        let option_list = document.getElementById('profile-options');        
        console.log(option_list.classList.contains('hide'));

         if(event.target == btn){
            let position_top = event.target.offsetHeight + 20;
            option_list.classList.toggle('hide');
            option_list.style.top = position_top + 'px';
        }
        else if(event.target != option_list && !option_list.classList.contains('hide')){
            option_list.classList.add('hide');    
        }
    }
    
    return(
        <div id = 'profile-avatar'>
            {profile_options}
            {img}
        </div>
    );
}
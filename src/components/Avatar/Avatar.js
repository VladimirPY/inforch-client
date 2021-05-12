import React, {useState, useEffect} from 'react';
import './Avatar.scss';

export default function Avatar(props){
    const avatar_btn_id = 'avatar-btn';
    const [showList, setShowList] = useState(false);
    

    useEffect(() => {
        window.addEventListener('click', showOptionList);
        return () => {
            window.removeEventListener('click', showOptionList)
        }
    })

    function showOptionList(event){
        if(event.target == document.getElementById(avatar_btn_id) && !showList){
            setShowList(true);
        }else{
            setShowList(false);
        }
    }

    let option_list = showList && <UserOptions top = {document.getElementById(avatar_btn_id).offsetHeight}/>
    
    return(
        <div id = 'profile-avatar'>
            {option_list}
            <img id = {avatar_btn_id} className = 'avatar border orange back-light' src = {process.env.PUBLIC_URL + "/images/photo.svg"}/>
        </div>
    );
};

function UserOptions(props){
    const top_position = props.top ? props.top + 20 : 0;
    const styles = {
        top: top_position + 'px'
    };

    return (        
        <nav id = 'profile-options' className = 'back-light' style = {styles}>
            1<br/>
            1<br/>
            1<br/>
        </nav>
    );
}
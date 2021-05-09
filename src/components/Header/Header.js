import React from 'react';
import HeaderAuth from './HeaderAuth';
import HeaderNotAuth from './HeaderNotAuth';

export default function Header(props){
    if(props.isAuth){
        return <HeaderAuth />;
    }else{
        return <HeaderNotAuth />;
    }
}
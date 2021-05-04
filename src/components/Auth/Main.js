//TODO: refactoring and comment all
import React from 'react';
import Signin from './Signin.js';
import Login from './Login.js';
import logos from '../../imgs.json';
import './Main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { render } from '@testing-library/react';

export default class Main extends React.Component {

    constructor (props){
        super(props);
        let formType = props.formType;
        this.state = {
            formType : formType ?? 'login'
        };
    }

    render(){
        let form = <div>No form selected!</div>,
            title_data = this.defineFormTitleData();
        if(this.state.formType == 'login'){
            form = <Login />;
        }else if(this.state.formType == 'signin'){
            form =  <Signin />;
        }

        return (
            <div className = 'form-frame flex'>
                <div className = 'logo-img'>
                    <img src = {process.env.PUBLIC_URL + logos.orange}/>
                </div>
                <div className = 'form-panel'>
                    <div className = 'form-title'>
                        <span>{title_data.title}</span>
                        <span>{title_data.question_text}
                            <a onClick = {this.changeForm.bind(this)}>{title_data.url_text}</a>
                        </span>
                    </div>
                    {form}
                </div>
            </div>
        );
    }

    defineFormTitleData() {
        let data = {};
        if(this.state.formType == 'login'){
            data = { 
                title : <p><b>LOG</b>IN</p>,
                question_text : 'YOU DON`T HAVE AN ACCOUNT?',
                url_text : 'SIGN IN',
                url_route : 'signin'
            };
        }else if(this.state.formType == 'signin'){
            data = {
                title : <p><b>CREATE</b> AN ACCOUNT</p>,
                url_text : 'LOG IN',
                question_text : 'HAVE YOU ALREADY HAD AN ACCOUNT?',
                url_route : 'login'
            };
        }
        return data;
    }

    changeForm(event){
        event.preventDefault();
        this.setState({
            formType : this.state.formType == 'login' ? 'signin' : 'login'   
        });
    }

} 

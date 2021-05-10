import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './Signin.js';
import Login from './Login.js';
import App from '../App.js';
import logos from '../../logo.json';
import './Main.scss';

export default class Main extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            formType : props.formType
        };
    }

    render(){
        let form = <div>No form selected!</div>,
        title_data = this.defineFormTitleData();
        
        if(this.state.formType === 'login'){
            form = <Login />;
        }else if(this.state.formType === 'signin'){
            form =  <Signin />;
        }

        return (
            <div id = {'auth-form[' + this.state.formType + ']'} className = 'form-frame flex'>
                <img class = 'close-cross' src = {process.env.PUBLIC_URL + '/images/Cross.svg'} onClick = {this.closeForm.bind(this)}/>
                <div className = 'logo-img'>
                    <img src = {process.env.PUBLIC_URL + logos.orange} alt = 'Logo'/>
                </div>
                <div className = 'form-panel'>
                    <div className = 'form-title'>
                        {title_data.title}
                        <span>{title_data.question_text}
                            <a onClick = {this.changeForm.bind(this)}>&nbsp;{title_data.url_text}</a>
                        </span>
                    </div>
                    {form}
                </div>
            </div>
        );
    }

    defineFormTitleData() {
        let data = {};
        if(this.state.formType === 'login'){
            data = { 
                title : <p><b>LOG</b>&nbsp;IN</p>,
                question_text : 'YOU DON`T HAVE AN ACCOUNT?',
                url_text : 'SIGN IN',
                url_route : 'signin'
            };
        }else if(this.state.formType === 'signin'){
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
            formType : this.state.formType === 'login' ? 'signin' : 'login'   
        });
    }

    closeForm(event){
        event.preventDefault();
        ReactDOM.render(
            <App/>,
            document.getElementById('root')
        );
    }

} 

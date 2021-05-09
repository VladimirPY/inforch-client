import React from "react";
import Input from '../UI/Input.js';

/**
 * Component render a SignIn form
 */
 export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        const emailAttributes = {
            id : 'input-email',
            name : 'email',
            type : 'text'
        };
        const passwordAttributes = {
            id : 'input-password',
            name : 'password',
            type : 'password'
        };
        return (
            <form id = 'signin-form' onSubmit = {this.handleSubmit}>
                <Input lableText = 'EMAIL ADRESS' inputAttributes = {emailAttributes}/>
                <Input lableText = 'PASSWORD' inputAttributes = {passwordAttributes}/>
                <button type = 'submit' className = 'btn dark'>LOG IN</button>
            </form>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
    }

} 



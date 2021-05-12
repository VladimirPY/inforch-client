import React from "react";
import Input from "../UI/Input";

/**
 * Component render a SignIn form
 */
 export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <form id = 'signin-form' onSubmit = {this.handleSubmit}>
                <Input lableText = 'EMAIL ADRESS' inputAttributes = {{id: "input-email", type: 'email', name: 'email', className : 'border dark'}}/>
                <div className = 'name-fields flex j-space-between'>
                    <Input lableText = 'NAME' inputAttributes = {{id: "input-name", type: 'text', name: 'name', className : 'border dark'}}/>
                    <Input lableText = 'LAST NAME' inputAttributes = {{id: "input-last-name", type: 'text', name: 'last_name', className : 'border dark'}}/>
                </div>          
                <Input lableText = 'PASSWORD' inputAttributes = {{id: "input-password", type: 'password', name: 'last_name', className : 'border dark'}}/>
                <Input lableText = 'BIRTH DATE' inputAttributes = {{id: "input-birth-date", type: 'date', name: 'birth-date', className : 'border dark'}}/>
                <button type = 'submit' className = 'btn dark'>SIGN IN</button>
            </form>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
    }

} 



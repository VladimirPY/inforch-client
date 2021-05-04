import React from "react";
import './Login.scss';

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
                <div className = 'input-field'>
                    <label htmlFor = 'email'>EMAIL ADRESS</label>
                    <input name = 'email' type = 'text'/>
                </div>
                <div className = 'input-field'>
                    <label htmlFor = 'password'>PASSWORD</label>
                    <input name = 'password' type = 'password'/>
                    {/* <img src = ''/> */}
                </div>
                <button type = 'submit' className = 'btn dark'>LOG IN</button>
            </form>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
    }

} 



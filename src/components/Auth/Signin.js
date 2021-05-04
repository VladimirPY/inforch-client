import React from "react";
import './Signin.scss';

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
                <label htmlFor = 'email'>EMAIL</label>
                <input name = 'email' type = 'email'/>
                <div className = 'name-fields flex j-space-between'>
                    <div>
                        <label htmlFor = 'name'>NAME</label>
                        <input name = 'name' type = 'text'/>
                    </div>
                    <div>
                        <label htmlFor = 'last_name'>LAST NAME</label>
                        <input name = 'last_name' type = 'text'/>
                    </div>
                </div>          

                <label htmlFor = 'password'>PASSWORD</label>
                <input name = 'password' type = 'password'/>

                <label htmlFor = 'date'>DAY</label>
                <input name = 'date' type = 'date'/>
    
                <button type = 'submit' className = 'btn dark'>SIGN IN</button>
            </form>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
    }

} 



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
                <div className = 'input-field'>
                    <label htmlFor = 'email'>EMAIL ADRESS</label>
                    <input name = 'email' type = 'text'/>
                </div>
                <div className = 'input-field'>
                    <div>
                        <label htmlFor = 'name'>NAME</label>
                        <input name = 'name' type = 'text'/>
                    </div>
                    <div>
                        <label htmlFor = 'last_name'>LAST NAME</label>
                        <input name = 'last_name' type = 'text'/>
                    </div>
                </div>                    
                <div className = 'input-field'>
                    <label htmlFor = 'password'>PASSWORD</label>
                    <input name = 'password' type = 'password'/>
                    {/* <img src = ''/> */}
                </div>
                <div className = 'input-field'>
                    <div>
                        <label htmlFor = 'name'>DAY</label>
                        <input name = 'name' type = 'text'/>
                    </div>
                    <div>
                        <label htmlFor = 'last_name'>MONTH</label>
                        <input name = 'last_name' type = 'text'/>
                    </div>
                    <div>
                        <label htmlFor = 'last_name'>YEAR</label>
                        <input name = 'last_name' type = 'text'/>
                    </div>
                </div>
                <button type = 'submit' className = 'btn dark'>SIGN IN</button>
            </form>
        )
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
    }

} 



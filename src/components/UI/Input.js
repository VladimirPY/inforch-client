import React from 'react';
import './Input.scss';

export default function Input(props){
    const input_attributes = props.inputAttributes;
    const lable = props.lableText && (<label htmlFor = {props.inputAttributes.id ?? ''}>{props.lableText}</label>);

    return (
        <div className = 'input-field'>
            {lable}
            <input {...input_attributes} />
        </div>
    )
}
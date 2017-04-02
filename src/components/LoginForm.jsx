import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class LoginForm extends Component {
    renderInputField(name, label) {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <Field name={name} component="input" type="text" placeholder={label}/>
                </div>
            </div>
        )
    }
    submit(values) {
        if (!values.city) {
            // throw new Error('INTERNAL FAULT')
            alert('Submit Failed: You must enter a valid city')
            return null
        }
        return null;
    }
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <h2>Search by</h2>
                <p>
                    Notice that if you enter a valid city, the submission will fail. Why is this?
                </p>
                {this.renderInputField('username', 'Username')}
                {this.renderInputField('password', 'Password')}
                AUTHENTICATION HOOKED UP
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'loginForm' // a unique identifier for this form
})(LoginForm)
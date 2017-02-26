import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class BuggyForm extends Component {
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
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
          <form onSubmit={(e, submitted) => { e.preventDefault(); alert(JSON.stringify(submitted)); console.log(handleSubmit)} }>
            {this.renderInputField('firstName', 'First Name')}
            {this.renderInputField('lastName', 'Last Name')}
            {this.renderInputField('icecream', 'Favorite Icecream')}
            <div>
              <button type="submit" disabled={pristine || submitting}>Submit</button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
          </form>
        )
    }
}

export default reduxForm({
    form: 'buggyForm'  // a unique identifier for this form
})(BuggyForm)
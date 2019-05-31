import React from 'react'
import { Field, reduxForm } from 'redux-form'
import _ from 'lodash'

class StreamForm extends React.Component {
  onSubmit = formValues => {
    const { onSubmitStream } = this.props
    onSubmitStream(formValues)
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className={'ui error message'}>
          <div className={'heander'}>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )
  }

  render() {
    return (
      <form
        className={'ui form error'}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name={'title'}
          component={this.renderInput}
          label={'Enter Title'}
        />
        <Field
          name={'description'}
          component={this.renderInput}
          label={'Enter Description'}
        />
        <button className={'ui button primary'}> Submit </button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  _.forEach(['title', 'description'], field => {
    if (!formValues[field]) {
      errors[field] = `You must enter a ${field}`
    }
  })
  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)

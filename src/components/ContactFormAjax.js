import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './ContactFormAjax.css'

const fetch = window.fetch

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '!!!JohnNelsonAlden.com Form Alert!!!', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your inquiry, I will get back to you as soon as possible.',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting me via email. Thanks!'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render () {
    const { name, subject, action } = this.props

    return (
      <form
        className='EnquiryForm'
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify='true'
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='text'
            placeholder='Name'
            name='name'
            required
          />
        </label>
        <label className='EnquiryForm--Label'>
          <input
            className='EnquiryForm--Input'
            type='email'
            placeholder='Email'
            name='email'
            required
          />
        </label>
        <label className='EnquiryForm--Label has-arrow'>
          <select
            className='EnquiryForm--Input EnquiryForm--Select'
            name='type'
            defaultValue='Type of Inquiry'
            required
          >
            <option disabled hidden>
              Type of Inquiry
            </option>
            <option>Need to know more</option>
            <option>Found a bug</option>
            <option>Want to say hello</option>
          </select>
        </label>
        <label className='EnquiryForm--Label'>
          <textarea
            className='EnquiryForm--Input EnquiryForm--Textarea'
            placeholder='Message'
            name='message'
            rows='8'
            required
          />
        </label>
        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />
        <input
          className='Button EnquiryForm--SubmitButton'
          type='submit'
          value='Inquire'
          disabled={this.state.disabled}
        />
      </form>
    )
  }
}

export default Form
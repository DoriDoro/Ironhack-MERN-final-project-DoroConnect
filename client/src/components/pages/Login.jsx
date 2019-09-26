import React, { useState } from 'react'
import api from '../../api'
import { useForm } from '../../hooks'

export default function Login(props) {
  const { formValues, getInputProps } = useForm({ email: '', password: '' })

  function handleSubmit(e) {
    e.preventDefault()
    api
      .login(formValues.email, formValues.password)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/profile') // Redirect to the home page
      })
      .catch(err => setMessage(err.toString()))
  }

  const [message, setMessage] = useState(null)

  return (
    <div className="Login">
      {/*<pre>{JSON.stringify(formValues)}</pre>*/}
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label> Email: </label>{' '}
        <input type="text" {...getInputProps('email')} /> <br />
        <label> Password: </label>{' '}
        <input type="password" {...getInputProps('password')} /> <br />
        <div className="form-div__btn">
          <button>Login</button>
        </div>
      </form>
      {message && <div className="info info-danger">{message}</div>}
    </div>
  )
}

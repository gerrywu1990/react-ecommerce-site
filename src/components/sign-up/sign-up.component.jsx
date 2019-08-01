import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <form onSubmit={this.handleSubmit}>
          <h2>I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <FormInput
            name="displayName"
            type="text"
            label="Display Name"
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp

import React from 'react'

import './sign-in-and-sign-up-page.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInSignUpPage = () => (
  <div className="form-group">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignUpPage

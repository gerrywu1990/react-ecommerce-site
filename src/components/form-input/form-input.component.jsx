import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ label, value, ...otherProps }) => (
  <div className="group">
    <input className="form-input" {...otherProps} />

    {label ? (
      <label className={`form-input-label ${value.length ? 'shrink' : ''}`}>{label}</label>
    ) : null}
  </div>
)

export default FormInput

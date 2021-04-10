import * as React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl } from './styles'

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'password';
}

export const TextField = ({
  name,
  label,
  placeholder,
  type = 'text',
  ...props
}: TextFieldProps) => {
  return (
    <FormControl {...props}>
      <p className="label">{label}</p>
      <Field
        name={name}
        placeholder={placeholder || 'Please input ${name}'}
        type={type}
      />
      <small className="error-msg">
        <ErrorMessage name={name} />
      </small>
    </FormControl>
  )
}

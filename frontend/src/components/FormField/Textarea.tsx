import * as React from 'react'
import { Field, ErrorMessage } from 'formik'
import { FormControl } from './styles'

interface TextareaProps {
  name: string
  label: string
  placeholder?: string
}

export const Textarea = ({
  name,
  label,
  placeholder,
  ...props
}: TextareaProps) => {
  return (
    <FormControl {...props}>
      <p className="label">{label}</p>
      <Field
        name={name}
        placeholder={placeholder || 'Please input ${name}'}
        as="textarea"
      />
      <small className="error-msg">
        <ErrorMessage name={name} />
      </small>
    </FormControl>
  )
}

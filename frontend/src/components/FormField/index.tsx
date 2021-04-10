import * as React from 'react'
import { Field, ErrorMessage } from 'formik'

type TextFieldProps = {
  type: 'text';
  name: string;
  label: string;
  placeholder?: string;
}
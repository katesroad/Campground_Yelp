import { Textarea } from 'components/FormField'
import { TextField } from 'components/FormField/TextField'
import { Button } from 'components/lib'
import { Form, Formik } from 'formik'
import * as React from 'react'
import { initialValues, ReviwSchema } from './review.helper'
import { Wrapper } from './styles'

interface WriteReviewProps extends React.ComponentProps<any> {
  campground: string
}

export default function WriteReview({
  campground,
  ...props
}: WriteReviewProps) {
  return (
    <Wrapper id="writeReview" {...props}>
      <h4 className="title">Write Review</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={ReviwSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <Form>
            <TextField name="title" placeholder="review title" label="title" />
            <Textarea
              name="body"
              placeholder="review content"
              label="content"
            />
            <p>
              <Button className="btn btn--submit"> Submit</Button>
            </p>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

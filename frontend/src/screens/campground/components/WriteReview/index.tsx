import { Textarea } from 'components/FormField'
import { TextField } from 'components/FormField/TextField'
import { Button, Spinner } from 'components/lib'
import { Form, Formik, ErrorMessage } from 'formik'
import Rating from '@material-ui/lab/Rating'
import * as React from 'react'
import { getIntialValues, ReviwSchema } from './review.helper'
import { useCreateReview } from 'hooks/reviews.hooks'
import { IReviewData } from 'types'
import { Wrapper } from './styles'

type WriteReviewProps = {
  campground: string
}

const WriteReview: React.FC<WriteReviewProps> = ({ campground, ...props }) => {
  const { status, mutate } = useCreateReview()
  const handleSubmit = (values: IReviewData) => {
    mutate(values)
  }
  return (
    <Wrapper id="writeReview" {...props}>
      <h4 className="title">Write Review</h4>
      <Formik
        initialValues={getIntialValues(campground)}
        validationSchema={ReviwSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <div className="ratting">
              <p>
                <span className="label">Ratting:</span>
                <Rating
                  name="ratting"
                  precision={0.5}
                  onChange={(
                    e: React.ChangeEvent<unknown>,
                    value: number | null
                  ) =>
                    props.handleChange({ target: { name: 'ratting', value } })
                  }
                />
              </p>
              <small className="error-msg">
                <ErrorMessage name="ratting" />
              </small>
            </div>
            <TextField name="title" placeholder="review title" label="title" />
            <Textarea
              name="body"
              placeholder="review content"
              label="content"
            />
            <p>
              <Button
                className="btn btn--submit"
                disabled={status === 'loading'}
              >
                Submit {status === 'loading' ? <Spinner /> : null}
              </Button>
            </p>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default WriteReview

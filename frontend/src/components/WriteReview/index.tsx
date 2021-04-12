import { Textarea } from 'components/FormField'
import { TextField } from 'components/FormField/TextField'
import { Button, Spinner } from 'components/lib'
import { Form, Formik, ErrorMessage } from 'formik'
import Rating from '@material-ui/lab/Rating'
import * as React from 'react'
import { getIntialValues, ReviwSchema } from './review.helper'
import { useCreateReview, useUpdateReview } from 'hooks/reviews.hooks'
import { withAuth } from 'components/withAuth'
import { IReviewData } from 'types'
import { Wrapper } from './styles'

type SubmitButtonProps = {
  status: 'loading' | 'idle' | 'success' | 'error'
  type: 'create' | 'update'
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ status, type }) => {
  const btn = (
    <Button className="btn btn--submit" disabled={status === 'loading'}>
      {type} {status === 'loading' ? <Spinner /> : null}
    </Button>
  )
  return withAuth(btn, {
    content: <p>{`To ${type} review, please login in`}</p>,
  })
}

interface ReviewData extends IReviewData {
  id?: string
}

type WriteReviewProps = {
  type: 'create' | 'update'
  review: ReviewData
}

const WriteReview: React.FC<WriteReviewProps> = ({ review, type }) => {
  const { status, mutate } = review.id
    ? useUpdateReview(review)
    : useCreateReview()
  const handleSubmit = (values: IReviewData) => {
    mutate(values)
  }
  const initialValues = review?.id ? getIntialValues(review.campground) : review
  return (
    <Wrapper id={type + 'Review'}>
      <h4 className="title">Write Review</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={ReviwSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <div className="rating">
              <p>
                <span className="label">Ratting:</span>
                <Rating
                  name="rating"
                  precision={0.5}
                  onChange={(
                    e: React.ChangeEvent<unknown>,
                    value: number | null
                  ) =>
                    props.handleChange({ target: { name: 'rating', value } })
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
              <SubmitButton status={status} type={type} />
            </p>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default WriteReview

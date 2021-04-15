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
import { ModalCloseBtn, useModal } from 'components/lib/modal'
import { VscClose } from 'react-icons/vsc'

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

type ReviewFormProps = {
  type: 'create' | 'update'
  review: any
}

const ReviewForm: React.FC<ReviewFormProps> = ({ review, type }) => {
  const [, setIsOpen] = useModal()
  const { status, mutate } = review.id
    ? useUpdateReview(review.campground)
    : useCreateReview()
  const handleSubmit = (values: IReviewData) => mutate(values)
  const initialValues = review?.id ? review : getIntialValues(review.campground)
  React.useEffect(() => {
    if (status === 'success') setIsOpen(false)
  }, [status])
  return (
    <Wrapper id={type + 'Review'}>
      <h4 className="title">
        <span className="title-content">{type} review</span>
        <ModalCloseBtn>
          <button className="btn btn--close">
            <VscClose />
          </button>
        </ModalCloseBtn>
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={ReviwSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <div className="rating">
              <p>
                <span className="label">Rating:</span>
                <Rating
                  name="rating"
                  precision={0.5}
                  value={props.values.rating}
                  onChange={(
                    e: React.ChangeEvent<unknown>,
                    value: number | null
                  ) =>
                    props.handleChange({ target: { name: 'rating', value } })
                  }
                />
              </p>
              <small className="error-msg">
                <ErrorMessage name="rating" />
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

export default ReviewForm

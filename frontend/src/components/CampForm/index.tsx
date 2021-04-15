import { Textarea } from 'components/FormField'
import { TextField } from 'components/FormField/TextField'
import { Button, Error, Spinner } from 'components/lib'
import { Form, Formik, ErrorMessage } from 'formik'
import * as React from 'react'
import { CampgroundSchema, getIntialValues } from './camp.helper'
import { withAuth } from 'components/withAuth'
import {
  useCreateCampground,
  useUpdateCampground,
} from 'hooks/campgrounds.hooks'
import { ReactQueryStatus } from 'types'
import { Wrapper } from './styles'
import { useHistory } from 'react-router'

type SubmitButtonProps = {
  status: ReactQueryStatus
  type: 'add' | 'update'
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ status, type }) => {
  const btn = (
    <Button className="btn btn--submit" disabled={status === 'loading'}>
      {type} campground {status === 'loading' ? <Spinner /> : null}
    </Button>
  )
  return withAuth(btn, {
    content: <p>{`To ${type} campround, please login in.`}</p>,
  })
}

type ErrorProps = {
  isSubmitting: boolean
  onClearMsg: () => void
  errMsg: string
}
const FormError = ({ isSubmitting, errMsg, onClearMsg }: ErrorProps) => {
  React.useEffect(() => {
    if (errMsg) {
      const t1 = setTimeout(() => {
        clearTimeout(t1)
        onClearMsg()
      }, 15000)
    }
  }, [errMsg, onClearMsg])
  if (!isSubmitting) return null
  return (
    <Error className="error-msg">
      <p>{errMsg.toString()}</p>
    </Error>
  )
}

type CampFormProps = {
  campground?: any
  type: 'add' | 'update'
}
const CampForm: React.FC<CampFormProps> = ({ campground, type }) => {
  const [errMsg, setErrMsg] = React.useState('')
  const getClearErrorHandler = (props: any) => () => {
    props.setSubmitting(false)
    setErrMsg('')
  }

  const history = useHistory()
  const m = type === 'update' ? useUpdateCampground() : useCreateCampground()
  const handleSubmit = (values: any) => m.mutate(values)
  const initialValues = campground ? campground : getIntialValues()
  React.useEffect(() => {
    if (m.status === 'success' && type === 'add') {
      history.push('/campgrounds')
    }
    if (m.status === 'error') {
      setErrMsg((m.error as any).msg)
    }
  }, [m.status, m.error])
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CampgroundSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, ...props }) => (
        <Wrapper>
          <Form onFocus={getClearErrorHandler(props)}>
            <TextField
              name="title"
              placeholder="campground title"
              label="title"
            />
            <TextField
              name="location"
              placeholder="campground location"
              label="location"
            />
            <Textarea
              name="description"
              placeholder="campground description"
              label="description"
            />
            <TextField
              name="price"
              placeholder="campground price"
              label="price"
            />
            {/* formik upload file example */}
            <div className="form-file">
              <input
                id="file"
                name="images"
                type="file"
                multiple
                onChange={(event: any) => {
                  const images = values.images
                  const newImg = event.currentTarget.files[0]
                  images.push(newImg)
                  setFieldValue('images', images)
                }}
                className="form-control"
              />
              <label className="label">
                <span className="file-text">Choose image(s)...</span>
                <span className="file-button">Browse</span>
              </label>
              <Error as="small">
                <ErrorMessage name="images" />
              </Error>
            </div>
            <FormError
              errMsg={errMsg}
              isSubmitting={props.isSubmitting}
              onClearMsg={getClearErrorHandler(props)}
            />
            <p>
              <SubmitButton status={m.status} type={type} />
            </p>
          </Form>
        </Wrapper>
      )}
    </Formik>
  )
}

export default CampForm

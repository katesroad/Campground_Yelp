import * as Yup from 'yup'

export const ReviwSchema = Yup.object().shape({
  title: Yup.string().required(`Review title can't be empty.`),
  body: Yup.string().required(`Review content can't be empty.`),
  ratting: Yup.number().required('Please add review ratting.'),
})

export const initialValues = {
  title: '',
  body: '',
  ratting: 0,
}

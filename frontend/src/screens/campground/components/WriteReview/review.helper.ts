import * as Yup from 'yup'

export const ReviwSchema = Yup.object().shape({
  title: Yup.string().required(`Review title can't be empty.`),
  body: Yup.string().required(`Review content can't be empty.`),
  rating: Yup.number()
    .min(1, 'Please add ratting.')
    .max(5, 'Maximum ratting value is five.')
    .required('Please add review ratting.'),
})

export function getIntialValues(campground: string) {
  return { campground, title: '', body: '', rating: 0 }
}

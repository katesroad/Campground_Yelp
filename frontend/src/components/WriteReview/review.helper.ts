import * as Yup from 'yup'

export const ReviwSchema = Yup.object().shape({
  title: Yup.string().required(`Review title can't be empty.`),
  body: Yup.string().required(`Review content can't be empty.`),
  rating: Yup.number()
    .min(0.1, 'Please add rating.')
    .max(5, 'Maximum ratting value is five.')
    .required('Please add review rating.'),
})

export function getIntialValues(campground: string) {
  return { rating: 0, title: '', body: '', campground }
}

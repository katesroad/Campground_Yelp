import * as Yup from 'yup'

export const CampgroundSchema = Yup.object().shape({
  title: Yup.string().required(`Title can't be empty.`),
  location: Yup.string().required(`Location can't be empty.`),
  price: Yup.number()
    .min(0, `Price can't be negative.`)
    .required(`Price can't be enmpty.`),
  description: Yup.string()
    .min(20, 'Description is too short.')
    .max(500, 'Description is too long.')
    .required("Campground description can' be empty."),
  images: Yup.array().of(Yup.mixed()).min(1, 'Please upload images.'),
})

export function getIntialValues() {
  return {
    title: '',
    location: '',
    price: '',
    description: '',
    images: [],
  }
}

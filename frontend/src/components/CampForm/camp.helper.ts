import * as Yup from 'yup'

export const CampgroundSchema = Yup.object().shape({
  title: Yup.string().required(`Campground title can't be empty.`),
  location: Yup.string().required(`Campground location can't be empty`),
  price: Yup.number()
    .min(0, `Price can't be negative`)
    .required(`Campground's price can't be enmpty`),
  description: Yup.string()
    .min(20, 'Campground description is too short')
    .max(500, 'Campground description is too long')
    .required("Campground description can' be empty."),
  images: Yup.array().of(Yup.mixed()).min(1, 'Please upload images'),
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

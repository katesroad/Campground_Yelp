import { useGetCampgrounds } from 'hooks/campgrounds.hooks'
import * as React from 'react'

export default function CampgroundsScreen() {
  const { data, status } = useGetCampgrounds()
  return null
}

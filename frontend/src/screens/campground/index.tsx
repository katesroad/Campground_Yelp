import * as React from 'react'

export default function CampgroundScreen() {
  React.useEffect(() => {
    document.title = 'Campground | YelpCamp'
    return () => {
      document.title = 'YelpCamp'
    }
  }, [])
  return null
}

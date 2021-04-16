import { Formik, Form } from 'formik'
import { TextField } from 'components/FormField'
import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Wrapper } from './styles'

type SearchCampsProps = {
  onSearch: (keyword: string) => void
  keyword: string
}

export default function SearchCamps({ keyword, onSearch }: SearchCampsProps) {
  const [search, setSearch] = React.useState<string>(keyword)
  const handleSubmit = (values: { search: string }) => {
    onSearch(values.search)
  }
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ search }}>
      {(props) => (
        <Wrapper>
          <h2>All campgrounds</h2>
          <Form>
            <div className="search-box">
              <FiSearch className="search-icon" />
              <TextField
                name="search"
                label=""
                placeholder="Search campgrounds"
              />
            </div>
          </Form>
        </Wrapper>
      )}
    </Formik>
  )
}

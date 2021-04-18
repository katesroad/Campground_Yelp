import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Form } from './styles'

type SearchCampsProps = {
  onSearch: (keyword: string) => void
  keyword: string
}

export default function SearchCamps({ keyword, onSearch }: SearchCampsProps) {
  const [search, setSearch] = React.useState<string>(keyword)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(search)
  }

  return (
    <Form action="#" onSubmit={handleSubmit}>
      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
          name="search"
          placeholder="Search campgrounds"
          value={search}
          onChange={(e) => {
            const value = e.currentTarget.value
            setSearch(value)
            if (!value.trim()) {
              onSearch('')
            }
          }}
        />
      </div>
    </Form>
  )
}

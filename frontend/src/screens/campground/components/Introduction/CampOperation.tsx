// eslint-disable-next-line
import styled from 'styled-components/macro'
import * as React from 'react'
import {
  ReviewButton,
  MarkButton,
  DirectButton,
} from 'components/CampOperation'

type CampOperationsProps = {
  id: string
  title: string
}
const CampOperations: React.FC<CampOperationsProps> = ({ id, title }) => {
  return (
    <div
      className="operation"
      css={`
        display: flex;
        align-items: center;
        button {
          background-color: var(--bs-blue);
          margin-right: 1rem;
          &.btn--review {
            background-color: var(--bs-secondary);
          }
        }
      `}
    >
      <ReviewButton id={id} />
      <DirectButton query={title} />
      <MarkButton id={id} />
    </div>
  )
}

export default CampOperations

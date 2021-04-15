// eslint-disable-next-line
import styled from 'styled-components/macro'
import * as React from 'react'
import { ReviewButton, MarkButton, Direction } from 'components/CampOperation'
import { Button } from 'components/lib'

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
      <Direction query={title}>
        <Button>Direction</Button>
      </Direction>
      <MarkButton id={id} />
    </div>
  )
}

export default CampOperations

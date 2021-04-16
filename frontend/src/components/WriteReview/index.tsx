import * as React from 'react'
import ReviewForm from './ReviewForm'
import { Modal, ModalOpenBtn, ModalContentBase } from 'components/lib/modal'
import { Spinner } from 'components/lib'
import { ErrorBoundaryWrap } from 'components/ErrorBoundary'

type WriteReviewModalProps = {
  review: any
  type: 'create' | 'update'
}
const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  review,
  type,
  children,
}) => {
  const value = React.useState<boolean>(false)
  return (
    <Modal value={value}>
      <ModalOpenBtn>{children}</ModalOpenBtn>
      <ModalContentBase aria-label="write review">
        <ErrorBoundaryWrap>
          <React.Suspense fallback={<Spinner />}>
            <ReviewForm review={review} type={type} />
          </React.Suspense>
        </ErrorBoundaryWrap>
      </ModalContentBase>
    </Modal>
  )
}

export default WriteReviewModal

import * as React from 'react'
import ReviewForm from './ReviewForm'
import { Modal, ModalOpenBtn, ModalContentBase } from 'components/lib/modal'

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
        <ReviewForm review={review} type={type} />
      </ModalContentBase>
    </Modal>
  )
}

export default WriteReviewModal

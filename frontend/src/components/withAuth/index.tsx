import { useAuth } from 'context/auth.context'
import { LocationState } from 'history'
import * as React from 'react'
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from '@reach/alert-dialog'
import { useHistory, useLocation } from 'react-router'

type WithAuthOptions = {
  content: React.ReactNode
  [key: string]: unknown
}

export function withAuth(
  element: React.ReactElement,
  options: WithAuthOptions
): React.ReactElement {
  const { user } = useAuth()
  const history = useHistory()
  const { pathname } = useLocation<LocationState>()
  const [showDialog, setShowDialog] = React.useState(false)
  // eslint-disable-next-line
  const cancelRef = React.useRef<any>()
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const handleClickYes = () => {
    setShowDialog(false)
    history.push(`/login?from=${pathname}`)
  }
  if (user) return element
  return (
    <div>
      <b onClick={open}>{element}</b>
      {showDialog && (
        <AlertDialog leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>Please Confirm!</AlertDialogLabel>
          <AlertDialogDescription>{options.content}</AlertDialogDescription>
          <div className="alert-buttons">
            <button onClick={handleClickYes}>Yes</button>{' '}
            <button ref={cancelRef} onClick={close}>
              Nevermind, cancle
            </button>
          </div>
        </AlertDialog>
      )}
    </div>
  )
}

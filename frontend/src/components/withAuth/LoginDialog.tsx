import AuthForm from 'components/AuthForm'
import * as React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useLogin, useRegister } from 'hooks/auth.hooks'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'

export default function LoginDialog() {
  const loginMutation = useLogin({ redirect: false })
  const reigsterMutation = useRegister({ redirect: false })
  const [showDialog, setShowDialog] = React.useState(true)
  const close = () => setShowDialog(false)
  const [type, setType] = React.useState<'login' | 'register'>('login')
  return (
    <Dialog isOpen={showDialog} onDismiss={close} aria-label="popup">
      <DialogOverlay>
        <DialogContent aria-label={type + '-modal'}>
          <span onClick={close} className="btn-close">
            <AiOutlineCloseCircle />
          </span>
          <AuthForm
            type={type}
            mutation={type === 'login' ? loginMutation : reigsterMutation}
            showPicture={false}
          />
          <p className="switch-type">
            {type === 'login' ? (
              <>
                Don't have an account?&nbsp;
                <button onClick={() => setType('register')}>Register</button>
              </>
            ) : (
              <>
                Already have an account?&nbsp;
                <button onClick={() => setType('login')}>Login</button>
              </>
            )}
          </p>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}

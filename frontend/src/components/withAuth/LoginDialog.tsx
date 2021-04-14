import AuthForm from 'components/AuthForm'
import * as React from 'react'
import { VscClose } from 'react-icons/vsc'
import { useLogin, useRegister } from 'hooks/auth.hooks'
import { Modal, ModalContentBase } from 'components/lib/modal'

export default function LoginDialog() {
  const loginMutation = useLogin({ redirect: false })
  const reigsterMutation = useRegister({ redirect: false })
  const value = React.useState<boolean>(true)
  const [, setShowDialog] = value
  const close = () => setShowDialog(false)
  const [type, setType] = React.useState<'login' | 'register'>('login')
  return (
    <Modal value={value}>
      <ModalContentBase>
        <span onClick={close} className="btn--close at-with-auth">
          <VscClose />
        </span>
        <AuthForm
          type={type}
          mutation={type === 'login' ? loginMutation : reigsterMutation}
          showPicture={false}
        />
        <p className="switch-type">
          {type === 'login' ? (
            <>
              Don't have an account ?&nbsp;
              <button onClick={() => setType('register')}>Register</button>
            </>
          ) : (
            <>
              Already have an account?&nbsp;
              <button onClick={() => setType('login')}>Login</button>
            </>
          )}
        </p>
      </ModalContentBase>
    </Modal>
  )
}

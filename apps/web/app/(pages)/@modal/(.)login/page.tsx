'use client'

import Login from '@/(components)/common/Login'
import { Modal } from '@repo/ui/modal'
import { useRouter } from 'next/navigation'

export default function LoginModal() {
  const { back } = useRouter()

  return (
    <Modal close={back}>
      <Login />
    </Modal>
  )
}

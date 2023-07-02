'use client'
import React, { useState, useEffect } from 'react'
import Modal from '../components/LoginModal'

const Login = ({ open }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(open)
  }, [open])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  )
}

export default Login

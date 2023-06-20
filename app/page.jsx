"use client"
const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}
const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}

import Modal from '../components/Modal'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
          <button onClick={()=>setIsOpen(true)}>Open Model</button>
          <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
            Fancy Modal
          </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}

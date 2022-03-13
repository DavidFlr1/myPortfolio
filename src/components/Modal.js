import React, { useState } from 'react'
import ReactModal from 'react-modal' // https://reactcommunity.org/react-modal/

const Modal = ({ setOpen, setClose, customStyles, children }) => {
  // setOpen      -> {boolean}
  // setClose     -> {() => boolean}
  // customStyles -> {object}
  return (
    <ReactModal isOpen={setOpen} onRequestClose={() => setClose()} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.50)'}, content: customStyles}}>
      {children}
    </ReactModal>
  )
}

export default Modal

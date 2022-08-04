import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export const OTPModal = ({show,handleClose,verifyOTP}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>You will get a OTP via <b>SMS</b></h6>

          <Form.Group className="mb-3">
            <Form.Control
              placeholder="----"
              type={"number"}
              value={""}
              onChange={(e)=>{}}
            />
          </Form.Group>
          <Button variant="primary" style={{float:'right'}} onClick={verifyOTP}>
            Save Changes
          </Button>
        </Modal.Body>

      </Modal>
  )
}

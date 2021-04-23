import { useState } from 'react'
import { Button, DialogContainer, TextField } from 'react-md'

// import logo from 'images/company-placeholder.png'

import './style.scss'

const DialogRejection = ({ handleReject, visible, handleHide }) => {
  const [description, setDescription] = useState('')
  const hide = () => {
    setDescription('')
    handleHide()
  }

  const onHandleReject = () => {
    handleReject(description)
    setDescription('')
  }

  const actionsButtons = []
  actionsButtons.push(
    <Button flat className="discard-btn" onClick={hide}>
      Discard
    </Button>,
    <Button flat className="reject-btn" onClick={onHandleReject}>
      Reject
    </Button>,
  )

  return (
    <DialogContainer
      id="reject-dialog"
      visible={visible}
      onHide={hide}
      actions={actionsButtons}
      className="dialogReject"
      title={
        <>
          <Button icon onClick={hide}>
            close
          </Button>
        </>
      }
      width={500}
      portal={true}
      lastChild={true}
      disableScrollLocking={true}
    >
      <div>
        <img />
        <span>Rejection Reason</span>

        <div>
          Please write down the reason why are you rejecting this job post?
        </div>
      </div>
      <TextField
        className="dialogReject_textField"
        label={'Enter reason here...'}
        placeholder={'Reason for the rejection of invoice will be written here'}
        value={description}
        onChange={setDescription}
        rows={5}
      />
    </DialogContainer>
  )
}
export default DialogRejection

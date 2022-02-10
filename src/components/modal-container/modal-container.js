import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: 8,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalContainer = ({ children, handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
      {children}
      </Box>
    </Modal>
  );
};

export default ModalContainer;

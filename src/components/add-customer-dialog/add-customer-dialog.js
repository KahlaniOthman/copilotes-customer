import * as React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AddCustomerDialog = ({ open, handleClose, handleAddCustomer }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      lastname: "",
      firstname: "",
      country: "",
      cardType: "",
    },
    onSubmit: (values) => {
      handleAddCustomer(values);
    },
  });

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Customer</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            name="firstname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            name="lastname"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            autoFocus
            margin="dense"
            id="country"
            name="country"
            label="Country"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          <TextField
            autoFocus
            margin="dense"
            id="cardType"
            name="cardType"
            label="Card Type"
            type="text"
            fullWidth
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.cardType}
          />
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              handleClose();
              formik.handleReset();
            }}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="contained"
            type="submit"
            onClick={formik.onSubmit}
          >
            Add Customer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddCustomerDialog;

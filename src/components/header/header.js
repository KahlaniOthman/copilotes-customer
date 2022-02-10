import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./style.css";
const Header = ({
  handleAddCustomer,
  handleDeleteCustomers,
  showDeleteButton,
}) => (
  <header className="header">
    <h2 className="header-title">List Of Customers</h2>
    <Stack spacing={2} direction="row">
      {showDeleteButton && (
        <Button
          color="error"
          onClick={handleDeleteCustomers}
          variant="outlined"
          size="small"
        >
          Delete Customers
        </Button>
      )}
      <Button onClick={handleAddCustomer} variant="outlined" size="small">
        Add Customer
      </Button>
    </Stack>
  </header>
);

export default Header;

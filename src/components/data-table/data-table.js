import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Checkbox from "@mui/material/Checkbox";

const DataTable = ({
  tableConfigs,
  data = [],
  handleDeleteCustomer,
  handleViewDetail,
  handleClickCustomer,
  customersSelected = []
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <table>
      <tr>
        {tableConfigs.map(({ label, id }) => (
          <th key={id}>{label}</th>
        ))}
      </tr>
      {data.map((el) => (
        <tr key={el.id}>
          <td onClick={() => handleClickCustomer(el.id)}>
            <Checkbox {...label}
            checked={customersSelected?.includes(el.id)}
            onChange={e => null }
            inputProps={{ 'aria-label': 'controlled' }}
             />
            {el?.id}
          </td>
          <td>{el?.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.subscriptionDate}</td>
          <td>
            <IconButton
              aria-label="eye"
              color="primary"
              size="small"
              onClick={() => handleViewDetail(el)}
            >
              <RemoveRedEyeOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              size="small"
              onClick={() => handleDeleteCustomer(el.id)}
            >
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default DataTable;

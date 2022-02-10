import { useQuery, useMutation } from "react-query";
import { useMemo, useState } from "react";
import moment from "moment";
import TextField from "@mui/material/TextField";

import DataTable from "components/data-table";
import Header from "components/header";
import AddCustomerDialog from "components/add-customer-dialog";
import ConfirmDialog from "components/confirm-dialog";
import ModalContainer from "components/modal-container";
import SimpleSnackbar from "components/toast";

import {
  listOfCustomers,
  deleteAllCustomers,
  deleteCustomer,
  postCustomer,
} from "libs/api";

import { tableConfigs } from "./helpers";

import "./style.css";
import InfoCard from "components/info-card/info-card";

const CustomersList = () => {
  const [searchCustomer, setSearchCustomer] = useState("");
  const [customersSelected, setCustomersSelected] = useState([]);
  const [openAddCustomerDialog, setOpenAddCustomerDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    data: customers,
    refetch,
    isLoading,
  } = useQuery(["listOfCustomers"], listOfCustomers, {
    refetchOnWindowFocus: false,
  });

  const { mutate: removeCustomers } = useMutation(deleteAllCustomers);
  const { mutate: removeCustomer } = useMutation(deleteCustomer);
  const { mutate: addCustomer } = useMutation(postCustomer);

  const customersData = useMemo(() => {
    let list = Array.isArray(customers)
      ? customers.map((el) => ({
          id: el.id,
          lastName: el.lastname,
          firstName: el.firstname,
          dateTimestamp: new Date(el?.details?.subscription?.date)?.getTime(),
          subscriptionDate: el?.details?.subscription?.date
            ? moment(el?.details?.subscription?.date).format("DD MMM, YYYY")
            : "",
          cardType: el?.details?.subscription?.cardType,
          country: el?.details?.country,
        }))
      : [];
    list = searchCustomer
      ? list.filter(
          (el) =>
            el?.lastName?.toLowerCase().includes(searchCustomer) ||
            el?.firstName?.toLowerCase().includes(searchCustomer)
        )
      : list;
    return list.sort((a, b) => b?.dateTimestamp - a?.dateTimestamp);
  }, [customers, searchCustomer]);

  const handleDeleteCustomers = () => {
    removeCustomers(
      { customersSelected },
      {
        onSuccess: (res) => {
          console.log("res", res);
          if (!res.error) {
            refetch();
            setCustomersSelected([]);
            setOpenConfirmDialog(false);
            setShowToast("Delete Customers is success");
          }
        },
      }
    );
  };

  const handleDeleteCustomer = () => {
    removeCustomer(
      { customerId: openConfirmDialog }, // open confirm dialog contain customer id
      {
        onSuccess: (res) => {
          if (!res.error) {
            refetch();
            setCustomersSelected([]);
            setOpenConfirmDialog(false);
            setShowToast("Delete Customers is success");
          }
        },
      }
    );
  };

  const handleAddCustomer = (data) => {
    addCustomer(
      {
        customer: {
          ...data,
          details: {
            country: data.country,
            subscription: {
              cardType: data.cardType,
              date: new Date(),
            },
          },
        },
      },
      {
        onSuccess: (res) => {
          if (!res.error) {
            refetch();
            setOpenAddCustomerDialog(false);
            setShowToast("Add Customer is success");
          }
        },
      }
    );
  };

  return (
    <div className="list-customers-wrapper">
      <Header
        handleAddCustomer={() => setOpenAddCustomerDialog(true)}
        handleDeleteCustomers={() => setOpenConfirmDialog(true)}
        showDeleteButton={customersSelected?.length !== 0}
      />
      <div className="search-bar">
        <TextField
          id="filled-search"
          label="Search Customer"
          value={searchCustomer}
          onChange={(e) => setSearchCustomer(e.target.value)}
          placeholder="First Name, Last Name"
          size="small"
          variant="standard"
        />
      </div>

      {!isLoading ? (
        <DataTable
          customersSelected={customersSelected}
          handleClickCustomer={(id) =>
            setCustomersSelected((prev) =>
              prev.includes(id)
                ? prev.filter((customerId) => customerId !== id)
                : [...prev, id]
            )
          }
          tableConfigs={tableConfigs}
          data={customersData}
          handleDeleteCustomer={(id) => setOpenConfirmDialog(id)}
          handleViewDetail={setShowInfo}
        />
      ) : (
        "Loading..."
      )}
      <AddCustomerDialog
        open={openAddCustomerDialog}
        handleAddCustomer={handleAddCustomer}
        handleClose={() => setOpenAddCustomerDialog(false)}
      />
      <ConfirmDialog
        open={openConfirmDialog}
        handleConfirm={() =>
          typeof openConfirmDialog === "boolean"
            ? handleDeleteCustomers()
            : handleDeleteCustomer()
        }
        handleClose={() => setOpenConfirmDialog(false)}
      />
      <ModalContainer open={showInfo} handleClose={() => setShowInfo(null)}>
        <InfoCard {...showInfo} />
      </ModalContainer>
      <SimpleSnackbar open={showToast} message={showToast} handleClose={() => setShowToast(false)} />
    </div>
  );
};

export default CustomersList;

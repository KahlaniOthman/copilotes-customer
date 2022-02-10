export const listOfCustomers = async () => {
  let res;
  try {
    res = await fetch("http://localhost:3000/customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  } catch (error) {
    res = { error };
  }

  return res;
};

export const deleteCustomer = async ({ customerId }) => {
  let res;
  try {
    res = await fetch(`http://localhost:3000/customers/${customerId}`, {
      method: "DELETE",
    });
  } catch (error) {
    res = { error };
  }

  return res;
};

export const deleteAllCustomers = async ({ customersSelected }) => {
  let res
  const deleteAllPromises = customersSelected.map((id) => deleteCustomer({customerId: id}));
 res = await Promise.all(deleteAllPromises);
 return res
};

export const postCustomer = async ({customer}) => {
  let res;
  try {
    res = await fetch("http://localhost:3000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer)
    }).then((response) => response.json());
  } catch (error) {
    res = { error };
  }

  return res;
};
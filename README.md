# Unattended front-end exercise

Create a simple app 

💡 Things you should know:
* The browser supported is the last version of Chrome
* This exercise is not time-boxed (although it should take around 1-2 hour to achieve), take the time to send us something that you are proud of 💪
* You can use libraries if you feel like so

📖 Documentation you may need:
* [React](https://reactjs.org/)
* [MUI](https://mui.com/)
* [Formik](https://formik.org/)

🔎 What we are looking for
* Clean & readable code
* E2E tests

✅ Requirements
* Create a new public repo in Github
* Typescript and Javascript are both accepted
* Send us the link to your repo
* Do not use Datagrid from MUI

## Get started 

```
npm install
# and 
npm start
```

To launch locally in `http://localhost:3001/`

## Resources

* GET http://localhost:3000/customers
* GET http://localhost:3000/customers/:id
* POST http://localhost:3000/customers
* DELETE http://localhost:3000/customers/:id

## Task 1
* Create a page that list the customers' id, first name, last name, and subscription date in a table
* Create a search bar that can filter by first name and last name
* The results are ordered by subscription date
* Each row can be clicked and returns the detailed data of the customer as a Card component (standard MUI is fine)

## Task 2
* Create an add button that would trigger a modal (or a new view) to create a new customer
* Inside the modal, there will be a form using Formik for field validations
* Check generator.js for the data schema

## Task 3
* Create a checkbox in front of each customer for multi-customers deletion purpose
* Create a delete button next to the add button
* That delete button triggers a confirmation dialog, displaying the customers to delete
* On deleting the selected users, pop up a snackbar and display the deleted users
* The view has to be refreshed with the new list of customers


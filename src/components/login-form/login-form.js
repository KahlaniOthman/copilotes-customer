import React, { useState } from "react";
import clsx from "clsx";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { validateEmail } from "./utils";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50ch",
  },
}));

const LoginForm = ({ handleConnexion }) => {
  const [information, setInformation] = useState({ email: "", password: "" });
  const [showPassword, handleClickShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const classes = useStyles();

  const validInformation = (info) => {
    const { email, password } = info;
    return email && validateEmail(email) && password;
  };

  const login = () => {
    validInformation(information)
      ? handleConnexion(information)
      : setError(true);
  };

  return (
    <div className="connexion-form">
      <section className="connexion-form-container">
        <h2 className="title">Enter your email and password to login</h2>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          color="secondary"
          className={clsx(classes.margin, classes.textField)}
          onChange={(e) =>
            setInformation({ ...information, email: e.target.value })
          }
        />
        <FormControl
          variant="filled"
          color="secondary"
          className={clsx(classes.margin, classes.textField)}
        >
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={information.password}
            onChange={(e) =>
              setInformation({ ...information, password: e.target.value })
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button
          onClick={login}
          variant="contained"
          color="secondary"
          className={clsx(classes.margin)}
        >
          Login
        </Button>
        {error && <p className="info">Please Enter valid Email and password</p>}
      </section>
    </div>
  );
};
export default LoginForm;

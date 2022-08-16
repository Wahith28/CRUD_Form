import { Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const AddUser = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    onAdd(data?.name, data?.email);
    reset();
  };
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: { value: /^\S+@\S+$/i, message: "Email must have @ character" }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <div>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            ADD USER
          </Typography>
          <div>
            <div className="form">
              <div className="txtfield">
                <TextField
                  placeholder="Name"
                  label="Name"
                  name="name"
                  type="text"
                  size="small"
                  {...register("name", registerOptions.name)}
                />
                <small className="text-danger">
                  {errors?.name && errors.name.message}
                </small>
              </div>
              <div className="txtfield">
                <TextField
                  placeholder="Email"
                  label="Email"
                  name="email"
                  type="email"
                  size="small"
                  {...register("email", registerOptions.email)}
                />
                <small className="text-danger">
                  {errors?.email && errors.email.message}
                </small>
              </div>
              <Button
                className="btn"
                variant="outlined"
                type="submit"
                dataLocator="submit-button"
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </form>
      <hr style={{ margin: "10px" }} />
    </div>
  );
};

export default AddUser;

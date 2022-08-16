import { Typography } from "@mui/material";
import React from "react";
import "./user.css";

const User = ({ id, email, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>
        <Typography>{name}</Typography>
      </td>
      <td>
        <Typography>{email}</Typography>
      </td>
    </tr>
  );
};

export default User;

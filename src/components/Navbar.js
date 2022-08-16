import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddUser from "./AddUser";
import User from "./User";
import Form from "./Form";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

TabPanel.defaultProps = {
  value:0,
  index:0
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function Navbar({ onAdd, users, onDelete, onEdit, data }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className="Tabs"
          TabIndicatorProps={{
            sx: { backgroundColor: "white", height: "1px" }
          }}
          dataLocator="tab-button"
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Forms" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h5">USER LIST</Typography>,
        <table style={{ width: "600px" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {users.map((user) => (
            <User
              id={user.id}
              key={user.id}
              name={user.name}
              email={user.email}
              onDelete={onDelete}
              dataLocator="User-tab"
            />
          ))}
        </table>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        dir={theme.direction}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <AddUser onAdd={onAdd} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "auto",
            margin: "5px"
          }}
        ></div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {users.map((user) => (
            <Form
              id={user.id}
              key={user.id}
              name={user.name}
              email={user.email}
              onDelete={onDelete}
              onEdit={onEdit}
              data={data}
            />
          ))}
        </table>
      </TabPanel>
    </Box>
  );
}

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "../../../styled-component/Form/Form";
import Summary from "./Summary";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabPersonalInformation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="mt-3">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Resumen" {...a11yProps(0)} />
          <Tab label="Valoraciones" {...a11yProps(1)} />
          <Tab label="Carreras" {...a11yProps(2)} />
          <Tab label="Transacciones" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Card height="65vh" borderRadius="16px">
          <Summary />
        </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Valoraciones
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Carreras
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Transacciones
      </CustomTabPanel>
    </Box>
  );
};
export default TabPersonalInformation;

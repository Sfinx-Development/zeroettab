import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useCustomerContext } from "../context/customerContext";

export default function CompanyForm() {
  const { customer, setCustomer } = useCustomerContext();
  const isMobile = window.innerWidth <= 820;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "80%" : "40%",
        }}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "white" }}
                checked={customer.isCompany}
                onChange={(event) =>
                  setCustomer({ ...customer, isCompany: event.target.checked })
                }
              />
            }
            label={
              <Typography color={"white"}>
                {<FormattedMessage id="company" />}
              </Typography>
            }
          />
          <FormControlLabel
            color="white"
            control={<Checkbox sx={{ color: "white" }} />}
            label={
              <Typography color={"white"}>
                {<FormattedMessage id="private-person" />}
              </Typography>
            }
          />
        </Box>
        <TextField
          label={<FormattedMessage id="company-name" />}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.companyName}
          onChange={(e) =>
            setCustomer({ ...customer, companyName: e.target.value })
          }
        />
        <TextField
          label={<FormattedMessage id="company-does" />}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.companyDescription}
          onChange={(e) =>
            setCustomer({ ...customer, companyDescription: e.target.value })
          }
        />
      </form>
    </Box>
  );
}

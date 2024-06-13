import { Box, TextField } from "@mui/material";
import { useCustomerContext } from "../context/customerContext";
import { FormattedMessage } from "react-intl";

export default function PersonalDataForm() {
  const { customer, setCustomer } = useCustomerContext();
  const isMobile = window.innerWidth <= 820;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
    >
      {/* <Typography variant={"h6"}>Dina uppgifter</Typography> */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "80%" : "40%",
          marginBottom: 2,
        }}
      >
        <TextField
          label={<FormattedMessage id="name" />}
          sx={{
            marginBottom: 2,
            background: "white",
          }}
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <TextField
          label={<FormattedMessage id="email" />}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
        <TextField
          label={<FormattedMessage id="phone" />}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.phone}
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        />
        <TextField
          label={<FormattedMessage id="address" />}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.address}
          onChange={(e) =>
            setCustomer({ ...customer, address: e.target.value })
          }
        />
        {/* <Button>Fortsätt</Button> */}
      </form>
    </Box>
  );
}

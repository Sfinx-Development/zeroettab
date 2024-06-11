import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
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
                checked={customer.isCompany}
                onChange={(event) =>
                  setCustomer({ ...customer, isCompany: event.target.checked })
                }
              />
            }
            label="Företag"
          />
          <FormControlLabel control={<Checkbox />} label="Privatperson" />
        </Box>
        <TextField
          label="Namn på företag"
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.companyName}
          onChange={(e) =>
            setCustomer({ ...customer, companyName: e.target.value })
          }
        />
        <TextField
          label="Vad gör ditt företag?"
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

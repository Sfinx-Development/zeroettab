import { Box, TextField } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useCustomerContext } from "../context/customerContext";

export default function ClientIdeaForm() {
  const { customer, setCustomer } = useCustomerContext();
  const isMobile = window.innerWidth <= 820;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
    >
      {/* <Typography variant={"h6"}>Om ditt företag</Typography> */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "80%" : "40%",
        }}
      >
        <TextField
          label={<FormattedMessage id="application-purpose" />}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.purposeApp}
          onChange={(e) =>
            setCustomer({ ...customer, purposeApp: e.target.value })
          }
        />
        <TextField
          label={<FormattedMessage id="application-type"/>}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.typeOfApp}
          onChange={(e) =>
            setCustomer({ ...customer, typeOfApp: e.target.value })
          }
        />
        <TextField
          label={<FormattedMessage id="target-group"/>}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.targetGroup}
          onChange={(e) =>
            setCustomer({ ...customer, targetGroup: e.target.value })
          }
        />
        {/* <TextField
          label="Har du önskemål om färger och designstilar?"
          sx={{ marginBottom: 2, background: "white" }}
        /> */}
        <TextField
          label={<FormattedMessage id="budget-time"/>}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.budgetDescription}
          onChange={(e) =>
            setCustomer({ ...customer, budgetDescription: e.target.value })
          }
        />
        <TextField
          label={<FormattedMessage id="other"/>}
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.extraDescription}
          onChange={(e) =>
            setCustomer({ ...customer, extraDescription: e.target.value })
          }
        />
      </form>
    </Box>
  );
}

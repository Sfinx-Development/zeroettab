import { Box } from "@mui/material";
import CompanyForm from "../components/CompanyForm";
import ClientIdeaForm from "../components/CustomerIdeaForm";
import FormStepper from "../components/FormStepper";
import PersonalDataForm from "../components/PersonalDataForm";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: 0,
        width: "100%",
        alignItems: "start",
        marginTop: 2,
        flexGrow: 1,
        minHeight: "100vh",
        // backgroundColor: "red",
        zIndex: 1,
      }}
    >
      <FormStepper
        steps={[
          { title: "Uppgifter", form: PersonalDataForm },
          { title: "Företag eller privatperson", form: CompanyForm },
          { title: "Beskriv din idé", form: ClientIdeaForm },
        ]}
      />
    </Box>
  );
}

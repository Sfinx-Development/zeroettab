import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const GradientBox = styled(Box)({
  width: "100%",
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  borderRadius: "15px",
  background:
    "linear-gradient(135deg, rgba(74, 144, 226, 0.8), rgba(109, 40, 217, 0.8))",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
});

const AnimatedTextField = styled(TextField)({
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.6)",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.8)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#4a90e2",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.6)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#4a90e2",
  },
});

const AnimatedButton = styled(Button)({
  background: "linear-gradient(135deg, #4a90e2, #6d28d9)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "25px",
  textTransform: "none",
  transition: "transform 0.3s ease",
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9, #4a90e2)",
    transform: "scale(1.05)",
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <GradientBox>
      <Typography variant="h4" sx={{ color: "white", mb: 3 }}>
        Kontaktformulär
      </Typography>
      <form onSubmit={handleSubmit}>
        <AnimatedTextField
          fullWidth
          label="Namn"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <AnimatedTextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <AnimatedTextField
          fullWidth
          label="Meddelande"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
        />
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <AnimatedButton type="submit">Skicka</AnimatedButton>
        </Box>
      </form>
    </GradientBox>
  );
};

export default ContactForm;

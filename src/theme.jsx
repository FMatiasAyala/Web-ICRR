import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A2342",
    },
    secondary: {
      main: "#2E86AB",
    },
    background: {
      default: "#F5F7FA",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;

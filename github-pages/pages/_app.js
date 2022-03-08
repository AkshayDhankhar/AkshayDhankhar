import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "../styles/globals.css";
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          height: "100%",
          maxWidth: "lg",
          p: 0,
          "@media (min-width: 600px)": {
            padding: 0,
          },
          // background: "rgb(242, 245, 250) !important;",
        }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;

import { DefaultSeo } from "next-seo";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getMeta } from "../components/SEO";
import "../styles/globals.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const meta = getMeta();
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...meta} />
      <Container
        sx={{
          height: "100%",
          maxWidth: "lg",
          p: 0,
          "@media (min-width: 600px)": {
            padding: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;

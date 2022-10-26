import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";

export default function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  return (
    <>
      <Head>
        <title>{title ? `${title} - Sanity Amazona` : "Sanity Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar sx={classes.toolbar}>
            <NextLink href="/" passHref>
              <Link>
                <Typography>amazona</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component="main">
          {children}
        </Container>
        <Box component="footer">
          <Typography>All rights reserved. Sanity Amazona.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}

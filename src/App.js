import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Pages from "./pages/index";
import { ThemeProvider } from "@material-ui/styles";

import { AppBar, CssBaseline, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

/**
 * credit point: https://app.cors.bridged.cc/
 */
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://cors.bridged.cc/https://n7b67.sse.codesandbox.io/graphql",
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <Router basename="/">
          <Pages />
        </Router>
      </ApolloProvider>
      <AppBar />
    </ThemeProvider>
  );
}

export default App;

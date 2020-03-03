import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./components/App";

const history = createMemoryHistory();

ReactDOM.render(
    <Router history={history}>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById("app")
);

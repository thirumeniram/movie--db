import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme,ThemeProvider } from "@mui/material";
import App from "./components/App";
import ToggleColorModeProvider from "./utils/DarkMode";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./index.css"

// const theme=createTheme({})
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <ToggleColorModeProvider>
        <App/>
      </ToggleColorModeProvider>
    </Provider>
   
)
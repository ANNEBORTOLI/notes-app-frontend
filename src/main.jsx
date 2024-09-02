import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import theme from "./styles/theme";

// import { Details } from "./pages/Details";
// import { Home } from "./pages/Home";
// import { SignIn } from "./pages/SignUp";
import { SignUp } from "./pages/SignUp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignUp />
    </ThemeProvider>
  </StrictMode>
);

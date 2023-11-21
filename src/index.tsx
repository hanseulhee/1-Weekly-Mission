import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "libs/apis/queryClient";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import Router from "router/Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <ErrorBoundary fallback={<div>에러 발생 🤒</div>}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <GlobalStyle />
          <Router />
        </React.StrictMode>
      </QueryClientProvider>
    </ErrorBoundary>
  </ThemeProvider>
);

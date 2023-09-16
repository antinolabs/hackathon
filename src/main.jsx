import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, message } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import { BrowserRouter as Router } from 'react-router-dom';

const token = {
  token: {
    colorPrimary: "#d74f58",
    borderRadius: 0,
  },
};

function queryErrorHandler(error) {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const content =
    error instanceof Error
      ? error.response.data.message
      : "error connecting to server";
  console.log(content);
  // prevent duplicate toasts
  message.destroy();
  message.error(content);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000, // 10 minutes
      cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <StateContextProvider>
          <ConfigProvider theme={token}>
            <StyleProvider hashPriority="high">
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </StyleProvider>
          </ConfigProvider>
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import App from "./App.tsx";
import "./index.css";
import List from "./components/pages/list.tsx";
import Create from "./components/pages/create.tsx";
import Login from "./components/pages/login.tsx";
import ErrorElement from "./components/elements/ErrorElement/ErrorElement.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/list",
        children: [
          {
            index: true,
            element: <List />,
          },
          {
            path: "/list/:id",
            element: <List />,
          },
        ],
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

if (import.meta.env.VITE_MOCK_API === "1") {
  import("./mocks/browser")
    .then(({worker}) => {
      worker.start({
        onUnhandledRequest: "bypass",
      });
    })
    .then(() => {
      root.render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </React.StrictMode>
      );
    });
} else {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

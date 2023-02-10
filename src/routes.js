import IndexOfSuppliers from "./components/Suppliers/Index";
import IndexOfProducts from "./components/Products/Index";
import IndexOfHome from "./components/Home/Index";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { fakeData } from "./Data";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <IndexOfHome /> },
      { path: "/suppliers", element: <IndexOfSuppliers fakeData={fakeData} /> },
      { path: "/products", element: <IndexOfProducts fakeData={fakeData} /> },
    ],
  },
];
export const router = createBrowserRouter(routes);

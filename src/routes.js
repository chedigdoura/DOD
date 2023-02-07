import IndexOfSuppliers from "./components/Suppliers/Index";
import IndexOfProducts from "./components/Products/Index";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
const routes = [
  { path: "/", element: <App /> },
  { path: "/suppliers", element: <IndexOfSuppliers /> },
  { path: "/products", element: <IndexOfProducts /> },
];
export const router = createBrowserRouter(routes);

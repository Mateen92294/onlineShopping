import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./src/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./src/assets/index.css";
import PrivateRoute from "./src/components/PrivateRoute";
import AdminRoute from "./src/components/AdminRoute";
import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";
import CartScreen from "./src/screens/CartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ShippingScreen from "./src/screens/ShippingScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import PlaceOrderScreen from "./src/screens/PlaceOrderScreen";
import OrderScreen from "./src/screens/OrderScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import OrderListScreen from "./src/screens/Admin/OrderListScreen";
import ProductListScreen from "./src/screens/Admin/ProductListScreen";
import ProductEditScreen from "./src/screens/Admin/ProductEditScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Home from "pages/Home/index.jsx";
import Cart from "pages/Cart";
import Address from "pages/Address";
import Payment from "pages/Payment";
import Myaccount from "pages/Myaccount";
import Myorder from "pages/Myorder";
import Wishlist from "pages/Wishlist";
import Signup from "pages/Signup";
import Contact from "pages/Contact/Contact";
import { Protected } from "./components/index.jsx";
import ProductPage from "pages/AllProducts/index.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/login",
      element: (
        <Protected authentication={false}>
          <Login />
        </Protected>
      ),
    },
    {
      path: "/signup",
      element: (
        <Protected authentication={false}>
          <Signup />
        </Protected>
      ),
    },
    {
      path: "/",
      element: (
        <Protected authentication={true}>
          <Home />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/contact",
      element: (
        <Protected authentication={true}>
          <Contact />
        </Protected>
      ),
    },
    {
      path: "/allproducts",
      element: (
        <Protected authentication={true}>
          <ProductPage />
        </Protected>
      ),
    },
    {
      path: "/cart",
      element: (
        <Protected authentication={true}>
          <Cart />
        </Protected>
      ),
    },
    {
      path: "/address",
      element: (
        <Protected authentication={true}>
          <Address />
        </Protected>
      ),
    },
    {
      path: "/payment",
      element: (
        <Protected authentication={true}>
          <Payment />
        </Protected>
      ),
    },
    {
      path: "/myaccount",
      element: (
        <Protected authentication={true}>
          <Myaccount />
        </Protected>
      ),
    },
    {
      path: "/myorder",
      element: (
        <Protected authentication={true}>
          <Myorder />
        </Protected>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <Protected authentication={true}>
          <Wishlist />
        </Protected>
      ),
    },
  ]);
  return element;
};

export default ProjectRoutes;

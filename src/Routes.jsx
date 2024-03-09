import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";
import Customer from "pages/Customer";
import Review from "pages/Review";
import AddMenu from "pages/AddMenu";
import MenuList from "pages/MenuList";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "customer",
      element: <Customer />,
    },
    {
      path: "review",
      element: <Review />,
    },
    {
      path: "addmenu",
      element: <AddMenu />,
    },
    {
      path: "menulist",
      element: <MenuList />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

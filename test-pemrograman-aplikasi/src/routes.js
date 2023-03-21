import HomePage from "./app/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayouts from "./app/layouts/DefautlLayouts";
import AddUserPage from "./app/pages/AddUserPage";
import ViewUserPage from "./app/pages/ViewUserPage";
import EditUserPage from "./app/pages/EditUserPage";

export const RouteList = createBrowserRouter([
  {
    path: "/",
    element: 
      <DefaultLayouts>
        <HomePage />
      </DefaultLayouts>
    ,
  },
  {
    path: "/add",
    element: 
      <DefaultLayouts>
        <AddUserPage />
      </DefaultLayouts>
    ,
  },
  {
    path: "/view/:id",
    element: 
      <DefaultLayouts>
        <ViewUserPage />
      </DefaultLayouts>
    ,
  },
  {
    path: "/edit/:id",
    element: 
      <DefaultLayouts>
        <EditUserPage />
      </DefaultLayouts>
    ,
  },
]);

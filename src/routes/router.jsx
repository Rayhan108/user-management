import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";

import AddUser from "../Page/AddUser/AddUser";
import Home from "../Page/Home/Home/Home";
import EditUser from "../Page/EditUser/EditUser";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'addUser',
          element:<AddUser></AddUser>
        },
        {
          path:'editUser',
          element:<EditUser></EditUser>
        },
      ]
    },
  ]);

export default router;
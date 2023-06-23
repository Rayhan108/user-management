import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import AddUser from "../Page/AddUser/AddUser";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<App></App>
        },
        {
          path:'addUser',
          element:<AddUser></AddUser>
        },
      ]
    },
  ]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Services from "../Page/Services/Services/Services";
import ServiceDetails from "../Page/Services/ServiceDetails/ServiceDetails";
import ServiceInput from "../Page/Services/ServiceInput/ServiceInput";
import BookAppointment from "../Page/Shared/BookAppoinment/BookAppoinment";
import Blog from "../Page/Blog/Blog";
import BlogDetails from "../Page/BlogDetails/BlogDetails";
import ContactForm from "../Page/ContactForm/ContactForm";
import LogIn from "../Page/LogIn/LogIn";
import Register from "../Page/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Doctors from "../Page/Dashboard/Doctors/Doctors";
import AddDoctor from "../Page/Dashboard/AddDoctor/AddDoctor";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/serviceDetails/:id",
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:"/serviceInput",
          element:<ServiceInput></ServiceInput>
        },
        {
          path:"/appoinment",
          element:<BookAppointment></BookAppointment>
        },
        {
          path:"/blogs",
          element:<Blog></Blog>
        },
        {
          path:"/blogDetails/:id",
          element:<BlogDetails></BlogDetails>
        },
        {
          path:"/contact",
          element:<ContactForm></ContactForm>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"doctors",
          element:<Doctors></Doctors>
        },
        {
          path:"doctor",
          element:<AddDoctor></AddDoctor>
        }
      ]
    }
  ]);
  export default router;
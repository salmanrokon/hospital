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
  ]);
  export default router;
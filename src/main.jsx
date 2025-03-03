import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root.jsx';
import Home from './Pages/Home.jsx';
import Statistics from './Pages/Statistics.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Gadgets from './Components/Gadgets.jsx';
import Laptops from './Components/Laptops.jsx';
import Smartphones from './Components/Smartphones.jsx';
import Accessories from './Components/Accessories.jsx';
import GadgetDetails from './Components/GadgetDetails.jsx';
import Carts from './Components/Carts.jsx';
import Wishes from './Components/Wishes.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Components/ErrorPage.jsx';
import Macbook from './Components/Macbook.jsx';
import Iphone from './Components/Iphone.jsx';
import Category from './Components/Category.jsx';
// import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        // errorElement:<Error></Error>,
        children:[
          {
            index:true,
            element:<Gadgets></Gadgets>,
            loader:()=>fetch('/gadgets.JSON'),
          },
          {
            path:':category',
            element:<Category></Category>,
            loader:()=>fetch('/gadgets.JSON'),
          },
          // {
          //   path:'laptops',
          //   element:<Laptops></Laptops>,
          //   loader:()=>fetch('/gadgets.JSON'),
          // },
          // {
          //   path:'smartphones',
          //   element:<Smartphones></Smartphones>,
          //   loader:()=>fetch('/gadgets.JSON'),
          // },
          // {
          //   path:'accessories',
          //   element:<Accessories></Accessories>,
          //   loader:()=>fetch('/gadgets.JSON'),
          // },
          // {
          //   path:'iphone',
          //   element:<Iphone></Iphone>,
          //   loader:()=>fetch('/gadgets.JSON')
          // },
          {
            path:'macbook',
            element:<Macbook></Macbook>,
            loader:()=>fetch('/gadgets.JSON'),
          }
        ]
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('/gadgets.JSON'),
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            index:true,
            element:<Carts></Carts>,
            loader:()=>fetch('/gadgets.JSON'),
          },
          {
            path:'wish',
            element:<Wishes></Wishes>,
            loader:()=>fetch('/gadgets.JSON')
          }
        ]
      },
      {
        path:'/gadget/:id',
        element:<GadgetDetails></GadgetDetails>,
        loader:()=>fetch('/gadgets.JSON')
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    {/* </HelmetProvider> */}
  </StrictMode>,
)

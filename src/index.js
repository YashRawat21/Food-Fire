import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from "react-router-dom";
import Contact from './components/Contact';
import Error from './components/Error';
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import App from './App';
import Cart from './components/Cart';

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))
const appRouter = createBrowserRouter([
  {
    path : "/" ,
    element : <App />,
    children : [
         {
          path: "/",
          element: <Body />
         },
        {
          path: "/about",
          element : <Suspense fallback = {<h1>Loading...</h1>}><About /></Suspense>
        },
        {
          path: "/contact",
          element : <Contact />
        },
        {
          path: "/grocery",
          element : <Suspense><Grocery fallback = {<h1>Loading...</h1>}/></Suspense>
        },
       
        {

          path: "/restaurants/:resId",
          element:<RestaurantMenu /> ,
         
        },
         {
          path: "/cart",
          element: <Cart />
         }
      
       
      
    ],
    errorElement : <Error />
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);



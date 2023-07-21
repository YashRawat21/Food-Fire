import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter ,Outlet} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Body from "./components/Body";
import App from './App';


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
          element : <About />
        },
        {
          path: "/contact",
          element : <Contact />
        },
      
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



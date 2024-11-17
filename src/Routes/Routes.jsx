import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact/Contact";
import BookOnline from "../Pages/BookOnline/BookOnline/BookOnline";
import NewsUpdate from "../Pages/NewsUpdate/NewsUpdate/NewsUpdate";
import NewsUpdateLayout from "../Layout/NewsUpdateLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
      
    ],
  },
  {
    path: "/contact",
    element: <Main></Main>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/news-update",
    element: <NewsUpdateLayout></NewsUpdateLayout>,
    children: [
      {
        path: "/news-update",
        element: <NewsUpdate></NewsUpdate>
      }
    ]
  },
  {
    path: "/book-online",
    element: <Main></Main>,
    children: [
      {
        path: "/book-online",
        element: <BookOnline></BookOnline>,
      },
    ],
  },
]);

export default router;

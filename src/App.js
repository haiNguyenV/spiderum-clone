import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Details from "./pages/details/details";
import ErrorPage from "./pages/noPage/noPage";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import PostList from "./pages/admin/components/postList/postList";
import Statistic from "./pages/admin/components/statistic/statistic";
import AddNew from "./pages/admin/components/addNew/addNew";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "details",
    element: <Details />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "statistic",
        element: <Statistic />,
      },
      {
        path: "addnew",
        element: <AddNew />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;

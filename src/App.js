import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { loader as logoutLoader } from "./pages/Logout";
import CouponPage, { couponsLoader } from "./pages/Coupons";
import InventoryPage, { inventoryLoader } from "./pages/Inventory";
import GamePage, { gamesLoader } from "./pages/Games";
import GameModal, { gameDetailLoader } from "./components/GameModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: tokenLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "coupons",
        element: <CouponPage />,
        loader: couponsLoader,
      },
      {
        path: "games",
        element: <GamePage />,
        loader: gamesLoader,
        children: [
          {
            path: "",
            loader: checkAuthLoader,
            element: <Outlet></Outlet>,
            children: [
              {
                path: "play/:id",
                element: <GameModal />,
                // action: createUser,
                loader: gameDetailLoader,
              },
            ],
          },
        ],
      },
      {
        path: "inventory",
        element: <InventoryPage />,
        loader: inventoryLoader,
      },
      {
        path: "logout",
        loader: logoutLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

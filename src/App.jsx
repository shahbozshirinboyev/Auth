import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import SignUp from "./components/SignUp";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import LogIn from "./components/LogIn";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LogIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;

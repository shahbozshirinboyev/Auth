import { createBrowserRouter,  RouterProvider } from "react-router-dom";

// components
import SignUp from "./components/SignUp"
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <SignUp />
          },
        ]
      }
    ]
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import SignUp from "./components/SignUp";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import LogIn from "./components/LogIn";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

function App() {

  const [token, setToken] = useState(false)
  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
   if(sessionStorage.getItem('token')){
    let data = JSON.parse(sessionStorage.getItem('token'))
    setToken(data)
   }
  }, [])
  

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: token ? <HomePage /> : <LogIn setToken={setToken} />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/homepage",
          element: token ? <HomePage /> : <LogIn setToken={setToken} />,
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

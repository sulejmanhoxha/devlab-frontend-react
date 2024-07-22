/////////////// App.js
import { createContext, useState } from "react";
//npm install react-switch
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactSwitch from "react-switch";

import "./App.css";
import ContactUs from "./components/ContactUs";
import ProtectedRoute from "./components/Protected";
import AboutUs from "./pages/About";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import { action as logoutAction } from "./pages/Logout";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "login",
        element: <AuthenticationPage />,
        action: authAction,
      },
      { path: "logout", action: logoutAction },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <RouterProvider router={router} />
        <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toogleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

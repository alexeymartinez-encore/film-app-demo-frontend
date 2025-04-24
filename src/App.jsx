import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import DeviceContextProvider from "./store/devices-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
      // { path: "support", element: <SupportPage /> },
    ],
  },
]);

function App() {
  return (
    <DeviceContextProvider>
      <RouterProvider router={router} />
    </DeviceContextProvider>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import RootLayout from "./pages/RootLayout";
import Home, { userDataLoader } from "./pages/Home";
import Error from "./pages/Error";

const GlobalStyle = createGlobalStyle`
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}

body{
  height: 100%;
  overflow-x: hidden;
  font-family: "DM Mono", monospace, Geneva, Verdana, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 62.5%;
  color: #eddede;
  background-color: #242423;
  font-weight: 600;
}
`;

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [{ index: true, element: <Home />, loader: userDataLoader }],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import { createGlobalStyle } from "styled-components";

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
  return (
    <>
      <GlobalStyle />
      <>Home</>
    </>
  );
};

export default App;

//コンソールにある警告はChakraによるもの。現在React18対応のものを作っているらしいので随時確認すべし。

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";

// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { useState, VFC } from "react";
import { SignIn } from "./components/pages/SignIn";
import  config  from "./config.json";

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

const Index: VFC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if ((name === "" || email === "") && config.signInEnabled) {
    return <SignIn setName={setName} setEmail={setEmail} />;
  } else {
    return <App />;
  }
};

const container = document.querySelector("#root")!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Index />
    </ChakraProvider>
  </BrowserRouter>
);

import { Route, Routes } from "@solidjs/router";

import "./config.scss";
import "./global.scss";
import { Home } from "./screens/home";
import { NoneLoginScreen } from "./screens/none-login";

export default function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="nl" component={NoneLoginScreen} />
    </Routes>
  );
}

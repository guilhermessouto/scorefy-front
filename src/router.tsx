import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Panel from "./pages/Panel";
import Tab from "./components/tab";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/tab',
    element: <Panel />,
    children: [
      {
        path: ':musicName',
        element: <Tab />
      }
    ]
  }
])

export default routes
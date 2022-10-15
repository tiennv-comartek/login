import "antd/dist/antd.min.css";
import { Suspense,  } from "react";
import { RouterProvider, } from "react-router-dom";

import "./assets/scss/app.scss";
import { browserRouters, } from "./routes";




function App() {

  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={browserRouters}/>
  </Suspense>
  )
}

export default App;

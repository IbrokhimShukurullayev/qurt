import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./components/context/store";
import Loading from "./components/loading/Loading";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <>
          <Loading/>
        </>
      }
    >
       <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);

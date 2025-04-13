import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import "./App.css";

// const Layout = lazy(() => import("./utility/Layout"));
// const Documentation = lazy(() => import("./pages/Documentation"));
// const Home = lazy(() => import("./pages/Home"));
import Layout from "./utility/Layout";
import Documentation from "./pages/Documentation";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Commands from "./pages/Commands";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
        errorElement={<Error />}
      />
      <Route path="documentation" element={<Documentation />}>
        <Route
          path="commands"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Commands />
            </Suspense>
          }
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

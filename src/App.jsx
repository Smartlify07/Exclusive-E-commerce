import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { lazy } from "react";

function App() {
  const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<Homepage />} path="/" />
      </Route>
    )
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;

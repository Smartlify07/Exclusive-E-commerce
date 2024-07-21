import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { lazy, Suspense } from "react";
import ProtectedAuthRoute from "./routes/protectedroutes/ProtectedAuthRoute";
import "react-toastify/ReactToastify.min.css";
import Wishlist from "./pages/Wishlist/Wishlist";
function App() {
  const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
  const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
  const Login = lazy(() => import("./pages/Login/Login"));
  const NotFound = lazy(() => import("./pages/ErrorPages/NotFound"));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route element={<Homepage />} path="/" />
          <Route
            path="/signup"
            element={
              <Suspense>
                <SignUp />
              </Suspense>
            }
          />

          <Route
            path="/wishlist"
            element={
              <ProtectedAuthRoute>
                <Wishlist />
              </ProtectedAuthRoute>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;

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
import ProductDetails from "./pages/ProductDetails/ProductDetails";
function App() {
  const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
  const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
  const Login = lazy(() => import("./pages/Login/Login"));
  const NotFound = lazy(() => import("./pages/ErrorPages/NotFound"));
  const Cart = lazy(() => import("./pages/Cart/Cart"));
  const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route element={<Homepage />} path="/" />

          <Route
            path="/wishlist"
            element={
              <Suspense
                fallback={
                  <div className="bg-gray-100 min-h-screen w-full"></div>
                }
              >
                <ProtectedAuthRoute>
                  <Wishlist />
                </ProtectedAuthRoute>
              </Suspense>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedAuthRoute>
                <Cart />
              </ProtectedAuthRoute>
            }
          />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route
            path="/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />

          <Route
            path="/signup"
            element={
              <Suspense>
                <SignUp />
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

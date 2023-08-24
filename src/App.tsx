import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { AuthGuard, RoleGuard } from "./guards";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";
import { Logout } from "./components/Logout";

const Login = lazy(() => import("./pages/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    // <div className="App">
    <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
        <BrowserRouter>
          <Logout />
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Private />} />
            </Route>
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.PROFILE} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
    // </div>
  );
}

export default App;

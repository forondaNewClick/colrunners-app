import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../models/routes";
import { RoutesWithNotFound } from "../../utilities";
import { Navbar } from "../../components/Navbar/Navbar";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));
const Athletes = lazy(() => import("../Athletes/Athletes"));
const Profile = lazy(() => import("../profile/Profile"));

const Private = () => {
  return (
    // <Routes>
    // {/* <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
    // <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    // <Route path={PrivateRoutes.HOME} element={<Home />} /> */}
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          <Route path={PrivateRoutes.ATHLETES} element={<Athletes />} />
          <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
          {/* <Route path='marvel' element={<MarvelPage />}/>
            <Route path='dc' element={<DcPage />}/>

            <Route path='search' element={<SearchPage />}/>
            <Route path='hero' element={<HeroPage />}/> */}

          {/* <Route path='/' element={<Navigate to="/marvel" />}/> */}
        </Routes>
      </div>
    </>
    // </Routes>
  );
};

export default Private;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMorty } from "../../services";
import { clearLocalStorage } from "../../utilities";
import { Roles } from "../../models/roles";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import {
  UserKey,
  createUser,
  resetUser,
} from "../../redux/states/User/userSlice";
import runners from "../../assets/images/runners.jpeg";
// import queryString from "query-string";
import EmailLogin from "./components/EmailLogin";
import axios from "axios";

declare global {
  interface Window {
    deferredPrompt: any; // Reemplaza 'any' con el tipo adecuado si lo conoces
  }
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   clearLocalStorage(UserKey);
  //   dispatch(resetUser());
  //   navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  // }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
    } catch (error) {
      console.log("error", error);
    }
  };

  const [handleFormUser, sethandleFormUser] = useState(false);

  const onContinueLogin = () => sethandleFormUser(!handleFormUser);

  console.log("handleFormUser", handleFormUser);

  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      // el event.preventDefault(); previene que salga la notificacion para dewscargar la aplicacion
      // event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  const [token, setToken] = useState<string>("");

  // const handleLogin = async () => {
  //   const queryParams = queryString.stringify({
  //     client_id: "b982187bffb44cd30ff25f646b9da57e6aad0003",
  //     redirect_uri: "http://localhost:5173/private/home", // Cambia esto por tu URL de redireccionamiento
  //     response_type: "code",
  //     scope: "read,activity:read", // Los permisos que necesitas
  //   });

  //   const authUrl = `http://localhost:5173/private/home?${queryParams}`;
  //   console.log("queryParams", queryParams);

  //   window.location.href = authUrl;
  // };

  const handleLoginSubmit = () => {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=112655&redirect_uri=http://localhost:5173/login&response_type=code&scope=read_all`;

    console.log("Authenticated with Strava!");
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const code = urlParams.get("code");
    console.log("code", code);

    if (code) {
      axios
        .post("https://www.strava.com/oauth/token", null, {
          params: {
            client_id: "112655",
            client_secret: "b982187bffb44cd30ff25f646b9da57e6aad0003",
            code,
            grant_type: "authorization_code",
          },
        })
        .then((response) => {
          const { access_token, athlete } = response.data;
          console.log("accessToken", access_token);
          console.log("athlete", athlete);

          // Hacer algo con el token de acceso, como almacenarlo en el estado global de la aplicación.
        })
        .catch((error) => {
          console.log("accessTokenError", error);
          // Manejar errores
        });
    }
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <img
            src={runners}
            alt=""
            height="350px"
            style={{ width: "inherit", maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {handleFormUser === false ? (
            <>
              <h4 className="mt-3">Conectate a tu cuenta</h4>
              <button
                className="btn"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#EEE",
                  color: "#000",
                  width: "220px",
                }}
                onClick={handleLoginSubmit}
              >
                Continua con Strava
              </button>
              <button
                className="btn"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#EEE",
                  color: "#000",
                  width: "220px",
                }}
                onClick={login}
              >
                Continua con Garmin
              </button>
              <button
                className="btn"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#EEE",
                  color: "#000",
                  width: "220px",
                }}
                onClick={onContinueLogin}
              >
                Continua con Email
              </button>
              <span>Olvidaste tu cuenta? recuperala aqui</span>
              {/* <button className="btn" style={{borderRadius: "20px",backgroundColor: "#EEE",color: "#000",width: "220px"}} onClick={downloadApp}>
                  Descargar
                </button> */}
            </>
          ) : (
            <EmailLogin login={login} />
          )}
        </div>
      </div>
    </>
  );
};
export default Login;

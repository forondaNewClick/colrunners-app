import { Link, NavLink, useNavigate } from "react-router-dom";
import LOGOCOLRUNNERS from "../../assets/images/LOGOCOLRUNNERS.svg";
import userIcon from "../../assets/images/userIcon.svg";
import { Tooltip } from "@mui/material";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light p-2"
      style={{ boxShadow: "1px 1px 11px #37373773" }}
    >
      <Link className="navbar-brand" to="/">
        <img
          src={LOGOCOLRUNNERS}
          alt=""
          className=""
          height="33px"
          width="79px"
        />
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/private/dashboard"
          >
            Inicio
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/private/atletas"
          >
            Atletas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/private/dashboard"
          >
            Planes
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            Valoraciones
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/private/dashboard"
          >
            Administrativo
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <Link className="navbar-brand" to="/">
            <img
              src={userIcon}
              alt=""
              className=""
              height="25px"
              width="20px"
            />
          </Link>
          <Link className="navbar-brand" to="/">
            <Tooltip
              title={
                <>
                  <span>Perfil</span>
                </>
              }
              placement="bottom"
            >
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link ${isActive ? "active" : ""}`
                }
                to="/private/profile"
              >
                <img
                  src={userIcon}
                  alt=""
                  className=""
                  height="25px"
                  width="20px"
                />
              </NavLink>
            </Tooltip>
          </Link>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Admin
          </button>
        </ul>
      </div>
    </nav>
  );
};

import TextField from "@mui/material/TextField";
import { Card } from "../../styled-component/Form/Form";
import PersonalInformation from "./components/PersonalInformation";
import TabPersonalInformation from "./components/TabPersonalInformation";

import perfilImg from "../../assets/images/perfilImg.png";

const Profile = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card height="85vh" borderRadius="16px" className="mt-5">
          <div>
            <img
              src={perfilImg}
              alt="perfilImg"
              className="img-thumbnail animate__animated animate__fadeInLeft"
            />
            <h5 className="mt-2">Datos de carrera</h5>
            <span>
              <b>Nivel:</b> Maratonista
            </span>
            <hr />
          </div>
          <div>
            <h5 className="mt-2">Ritmos</h5>
            <span className="d-flex justify-content-between">
              <b>70%</b> 5:45 - 6:00 min
            </span>
            <span className="d-flex justify-content-between">
              <b>85%</b> 5:15 - 5:30 min
            </span>
            <span className="d-flex justify-content-between">
              <b>95%</b> 4:55 - 5:05 min
            </span>
          </div>
          <div>
            <hr />
            <h5 className="mt-2">Estilo</h5>
            <span className="d-flex justify-content-between">
              <b>Cadencia</b> 180min
            </span>
            <span className="d-flex justify-content-between">
              <b>Distancia de paso</b> 170metros
            </span>
            <span className="d-flex justify-content-between">
              <b>% tiempo aire</b> 20%
            </span>
          </div>
          <div>
            <hr />
            <h5 className="mt-2">Chequeos Recientes</h5>
            <span className="d-flex justify-content-between">
              <b>3k</b> 15:35min
            </span>
            <span className="d-flex justify-content-between">
              <b>5k</b> 28:40min
            </span>
            <span className="d-flex justify-content-between">
              <b>10k</b> 58:40min
            </span>
            <span className="d-flex justify-content-between">
              <b>15k</b> 1:28:40min
            </span>
          </div>
        </Card>
      </div>
      <div className="col-sm-8">
        <Card height="38vh" borderRadius="16px" className="mt-5">
          <h6>Información personal</h6>
          <PersonalInformation />
        </Card>
        <TabPersonalInformation />
      </div>
    </div>
  );
};
export default Profile;

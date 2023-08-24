import InputForm from "../../../components/input/InputForm.component";

const PersonalInformation = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <InputForm label="Nombre" />
        </div>
        <div className="col-sm-3">
          <InputForm label="Apellido" />
        </div>
        <div className="col-sm-4">
          <InputForm label="Fecha de nacimiento" />
        </div>
        <div className="col-sm-2">
          <InputForm label="Edad" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-3">
          <InputForm label="Documento de identidad" />
        </div>
        <div className="col-sm-3">
          <InputForm label="Ciudad" />
        </div>
        <div className="col-sm-4">
          <InputForm label="Pais" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-2">
          <InputForm label="Estatura" />
        </div>
        <div className="col-sm-2">
          <InputForm label="Peso" />
        </div>
        <div className="col-sm-2">
          <InputForm label="IMC" />
        </div>
      </div>
    </>
  );
};
export default PersonalInformation;

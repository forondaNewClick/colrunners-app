import InputRegister from "../../../components/input/InputRegister.component";

const EmailLogin = ({ login }: any) => {
  return (
    <>
      {/* <form> */}
      <h4 className="mt-3">Continua con Email</h4>
      <div className="row">
        <div className="form-group offset-md-2 col-sm-8 text-md-start mt-3">
          <InputRegister
            placeholder="Ingresa tu cuenta"
            label="Cuenta"
            id="0"
            type="text"
            min={3}
            name="Cuenta"
            // register={register}
            // error={String(errors["name"]?.message)}
          />
        </div>
        <div className="form-group offset-md-2 col-sm-8 text-md-start mt-3">
          <InputRegister
            placeholder="Ingresa la contraseña"
            label="Contraseña"
            id="0"
            type="password"
            min={3}
            name="password"
            // register={register}
            // error={String(errors["password"]?.message)}
          />
        </div>
        <div className="form-group offset-md-2 col-sm-8 text-md-start mt-3">
          <button className="btn btn-primary" onClick={login}>
            Iniciar Sesión
          </button>
        </div>
        {/* <div className="form-group col-sm-6">
          <InputRegister
            placeholder="Ingresa tu Apellido"
            label="Apellido"
            id="0"
            type="text"
            min={3}
            name="last_name"
            register={register}
            error={String(errors["last_name"]?.message)}
          />
        </div> */}
      </div>
      {/* </form> */}
    </>
  );
};
export default EmailLogin;

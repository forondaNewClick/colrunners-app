const Summary = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <span>
            <b>Plan de entrenamiento:</b> Especifico G 42K
          </span>
        </div>
        <div className="col-sm-6 text-center">
          <span>
            <b>Fecha ingreso:</b> 16/05/2023
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center mt-3">
          <span>
            <b>Objetivo Principal:</b> Mantener rendimiento en 42k
          </span>
        </div>
        <hr className="mt-3" />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <span>
            <b>Proxima carrera:</b> Maraton de Medellín
          </span>
        </div>
        <div className="col-sm-3">
          <span>
            <b>Distancia:</b> 42Km
          </span>
        </div>
        <div className="col-sm-3">
          <span>
            <b>Fecha:</b> 18/08/2023
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 text-end mt-3">
          <span>
            <b>Tiempo estimado:</b> 3:30 Hr
          </span>
        </div>
        <div className="col-sm-6 text-start mt-3">
          <span>
            <b>Ritmo:</b> 4:55min
          </span>
        </div>
        <hr className="mt-3" />
      </div>
      <h5 className="mt-3">Total Kilometros</h5>
    </>
  );
};
export default Summary;

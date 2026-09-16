export default function RequestSummary() {
  return (
    <aside className="summary-card" aria-label="Resumen de la solicitud">
      <h4>Resumen rápido</h4>
      <div className="summary-row">
        <span>Productos disponibles</span>
        <b>5</b>
      </div>
      <div className="summary-row">
        <span>Tasa desde</span>
        <b>0,9% mensual</b>
      </div>
      <div className="summary-row">
        <span>Plazo máximo</span>
        <b>240 meses</b>
      </div>
      <div className="summary-row">
        <span>Respuesta estimada</span>
        <b>24–48 h</b>
      </div>
      <p className="summary-note">
        Este formulario es una maqueta de diseño para el caso de estudio de
        Ingeniería Web I: no envía datos a ningún servidor.
      </p>
    </aside>
  );
}

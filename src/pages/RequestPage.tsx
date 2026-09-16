import RequestForm from "../components/RequestForm";
import RequestSummary from "../components/RequestSummary";

export default function RequestPage() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Solicitud en línea</span>
            <h2>Cuéntanos sobre ti y tu crédito</h2>
            <p>
              Completa los tres bloques del formulario. Ninguna información se
              envía a un servidor: esta pantalla es solo el diseño de la
              solicitud.
            </p>
          </div>
          <div className="form-layout">
            <RequestForm />
            <RequestSummary />
          </div>
        </div>
      </section>
    </main>
  );
}

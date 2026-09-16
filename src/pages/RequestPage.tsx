export default function RequestPage() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Estamos para ayudarte</span>
            <h1>Solicita tu crédito</h1>
            <p>
              Déjanos tus datos y un asesor de CreditSmart se pondrá en contacto
              contigo.
            </p>
          </div>
          <div className="form-card">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Nombre completo</label>
                <input id="name" type="text" />
              </div>
              <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email" />
              </div>
              <div className="field">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" type="tel" />
              </div>
              <div className="field">
                <label htmlFor="credit">Tipo de crédito</label>
                <select id="credit">
                  <option>Selecciona una opción</option>
                  <option>Libre inversión</option>
                  <option>Vehículo</option>
                  <option>Vivienda</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="button">
                Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

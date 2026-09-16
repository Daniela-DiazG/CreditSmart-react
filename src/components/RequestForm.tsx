import { useRef, useState } from "react";
import FormSection from "./FormSection";
import Toast from "./Toast";

type RequestFields = {
  nombre: string;
  cedula: string;
  email: string;
  telefono: string;
  tipoCredito: string;
  monto: string;
  plazo: string;
  destino: string;
  empresa: string;
  cargo: string;
  ingresos: string;
};

const initialFields: RequestFields = {
  nombre: "",
  cedula: "",
  email: "",
  telefono: "",
  tipoCredito: "",
  monto: "",
  plazo: "",
  destino: "",
  empresa: "",
  cargo: "",
  ingresos: "",
};

export default function RequestForm() {
  const [fields, setFields] = useState(initialFields);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const updateField = (field: keyof RequestFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
  };

  const showToast = (message: string) => {
    setToast({ visible: true, message });
    window.setTimeout(() => setToast({ visible: false, message: "" }), 3200);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return;
    }
    showToast("Solicitud enviada correctamente (simulación de diseño).");
    setFields(initialFields);
  };

  const handleReset = () => {
    setFields(initialFields);
    showToast("Formulario limpiado.");
  };

  return (
    <>
      <form
        ref={formRef}
        className="form-card"
        onSubmit={handleSubmit}
        onReset={handleReset}
        noValidate
      >
        <FormSection number={1} title="Datos personales">
          <div className="form-grid">
            <div className="field field-full">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                value={fields.nombre}
                onChange={(event) => updateField("nombre", event.target.value)}
                placeholder="Ej: Laura Gómez Pérez"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="cedula">Cédula</label>
              <input
                type="number"
                id="cedula"
                value={fields.cedula}
                onChange={(event) => updateField("cedula", event.target.value)}
                placeholder="Ej: 1020304050"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                value={fields.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>
            <div className="field field-full">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                value={fields.telefono}
                onChange={(event) =>
                  updateField("telefono", event.target.value)
                }
                placeholder="Ej: 3001234567"
                required
              />
            </div>
          </div>
        </FormSection>
        <FormSection number={2} title="Datos del crédito">
          <div className="form-grid">
            <div className="field field-full">
              <label htmlFor="tipo-credito">Tipo de crédito</label>
              <select
                id="tipo-credito"
                value={fields.tipoCredito}
                onChange={(event) =>
                  updateField("tipoCredito", event.target.value)
                }
                required
              >
                <option value="" disabled>
                  Selecciona un producto
                </option>
                <option value="libre-inversion">Crédito Libre Inversión</option>
                <option value="vehiculo">Crédito Vehículo</option>
                <option value="vivienda">Crédito Vivienda</option>
                <option value="educativo">Crédito Educativo</option>
                <option value="empresarial">Crédito Empresarial</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="monto">Monto solicitado (COP)</label>
              <input
                type="number"
                id="monto"
                value={fields.monto}
                onChange={(event) => updateField("monto", event.target.value)}
                placeholder="Ej: 15000000"
                min="0"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="plazo">Plazo en meses</label>
              <select
                id="plazo"
                value={fields.plazo}
                onChange={(event) => updateField("plazo", event.target.value)}
                required
              >
                <option value="" disabled>
                  Selecciona un plazo
                </option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
                <option value="36">36 meses</option>
                <option value="48">48 meses</option>
                <option value="60">60 meses</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="destino">Destino del crédito</label>
              <textarea
                id="destino"
                value={fields.destino}
                onChange={(event) => updateField("destino", event.target.value)}
                rows={3}
                placeholder="Cuéntanos brevemente para qué usarás el crédito"
              />
            </div>
          </div>
        </FormSection>
        <FormSection number={3} title="Datos laborales">
          <div className="form-grid">
            <div className="field field-full">
              <label htmlFor="empresa">Empresa donde trabaja</label>
              <input
                type="text"
                id="empresa"
                value={fields.empresa}
                onChange={(event) => updateField("empresa", event.target.value)}
                placeholder="Ej: Tech Solutions S.A.S"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="cargo">Cargo</label>
              <input
                type="text"
                id="cargo"
                value={fields.cargo}
                onChange={(event) => updateField("cargo", event.target.value)}
                placeholder="Ej: Desarrolladora Web"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="ingresos">Ingresos mensuales (COP)</label>
              <input
                type="number"
                id="ingresos"
                value={fields.ingresos}
                onChange={(event) =>
                  updateField("ingresos", event.target.value)
                }
                placeholder="Ej: 3500000"
                min="0"
                required
              />
            </div>
          </div>
        </FormSection>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Enviar solicitud
          </button>
          <button type="reset" className="btn btn-ghost">
            Limpiar formulario
          </button>
        </div>
      </form>
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}

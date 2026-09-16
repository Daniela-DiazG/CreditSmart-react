export type SimulatorFiltersValue = {
  search: string;
  range: "all" | "low" | "mid" | "high";
  term: string;
};

type SimulatorFiltersProps = {
  value: SimulatorFiltersValue;
  onChange: (value: SimulatorFiltersValue) => void;
  onClear: () => void;
};

export default function SimulatorFilters({
  value,
  onChange,
  onClear,
}: SimulatorFiltersProps) {
  const update = (field: keyof SimulatorFiltersValue, fieldValue: string) => {
    onChange({ ...value, [field]: fieldValue });
  };

  return (
    <form
      className="simulator-panel simulator-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="field">
        <label htmlFor="search-input">Buscar por nombre del producto</label>
        <input
          type="text"
          id="search-input"
          value={value.search}
          onChange={(event) => update("search", event.target.value)}
          placeholder="Ej: Crédito Vivienda"
          autoComplete="off"
        />
      </div>
      <div className="field">
        <label htmlFor="range-select">Rango de monto</label>
        <select
          id="range-select"
          value={value.range}
          onChange={(event) => update("range", event.target.value)}
        >
          <option value="all">Todos los montos</option>
          <option value="low">Hasta $20.000.000</option>
          <option value="mid">$20.000.001 – $100.000.000</option>
          <option value="high">Más de $100.000.000</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="plazo-select">Plazo deseado</label>
        <select
          id="plazo-select"
          value={value.term}
          onChange={(event) => update("term", event.target.value)}
        >
          <option value="">Cualquier plazo</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
          <option value="36">36 meses</option>
          <option value="48">48 meses</option>
          <option value="60">60 meses</option>
        </select>
      </div>
      <div className="field">
        <button
          type="button"
          onClick={onClear}
          className="btn btn-ghost btn-block"
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}

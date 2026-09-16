import { useMemo, useState } from "react";
import SimulatorFilters, {
  type SimulatorFiltersValue,
} from "../components/SimulatorFilters";
import SimulatorResults from "../components/SimulatorResults";
import { credits } from "../data/credits";

const initialFilters: SimulatorFiltersValue = {
  search: "",
  range: "all",
  term: "",
};

export default function SimulatorPage() {
  const [filters, setFilters] = useState(initialFilters);
  const filteredCredits = useMemo(() => {
    const search = filters.search.trim().toLowerCase();
    const ranges = {
      all: [0, Infinity],
      low: [0, 20000000],
      mid: [20000001, 100000000],
      high: [100000001, Infinity],
    } as const;
    const [minimum, maximum] = ranges[filters.range];
    const desiredTerm = Number(filters.term);

    return credits.filter(
      (credit) =>
        credit.name.toLowerCase().includes(search) &&
        credit.maxAmount >= minimum &&
        credit.maxAmount <= maximum &&
        (!filters.term || Number(credit.term.split(" ")[0]) >= desiredTerm),
    );
  }, [filters]);

  return (
    <main>
      <section className="simulator-intro">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Simulador de crédito</span>
            <h2>Busca y filtra por monto</h2>
            <p>
              Escribe el nombre del producto o filtra por rango de monto
              disponible para encontrar el crédito que más te conviene.
            </p>
          </div>
          <SimulatorFilters
            value={filters}
            onChange={setFilters}
            onClear={() => setFilters(initialFilters)}
          />
        </div>
      </section>
      <SimulatorResults credits={filteredCredits} />
    </main>
  );
}

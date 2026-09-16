import CreditCard from "./CreditCard";
import type { Credit } from "../data/credits";

export default function SimulatorResults({ credits }: { credits: Credit[] }) {
  const count = credits.length;
  const label = `${count} producto${count === 1 ? "" : "s"} encontrado${count === 1 ? "" : "s"}`;

  return (
    <section id="resultados" aria-labelledby="resultados-title">
      <div className="container">
        <div className="results-bar">
          <h2 id="resultados-title" className="results-title">
            Resultados
          </h2>
          <span className="results-count">{label}</span>
        </div>
        {count > 0 ? (
          <div className="card-grid">
            {credits.map((credit) => (
              <CreditCard
                key={credit.id}
                credit={credit}
                showSimulator={false}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>
              <strong>No encontramos créditos con esos criterios.</strong>
              <br />
              Prueba con otro nombre o amplía el rango de monto.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

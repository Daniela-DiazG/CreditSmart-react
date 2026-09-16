import { Link } from "react-router-dom";
import CreditCard from "../components/CreditCard";
import RateDial from "../components/RateDial";
import { credits } from "../data/credits";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Catálogo de créditos</span>
            <h1>
              Encuentra el crédito <em>que se ajusta</em> a tu plan
            </h1>
            <p className="lead">
              Compara tasas, montos y plazos de nuestros cinco productos
              crediticios y solicita en línea sin filas ni papeleo.
            </p>
            <div className="hero-actions">
              <Link to="/simulador" className="btn btn-primary">
                Simular un crédito
              </Link>
              <Link to="/solicitar" className="btn btn-ghost">
                Solicitar ahora
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <b>5</b>
                <span>Productos activos</span>
              </div>
              <div className="hero-stat">
                <b>0,9%–1,8%</b>
                <span>Tasa mensual</span>
              </div>
              <div className="hero-stat">
                <b>12–240</b>
                <span>Meses de plazo</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            {credits.slice(0, 3).map((credit) => (
              <div className="mini-card" key={credit.id}>
                <RateDial
                  rate={credit.rate}
                  percentage={credit.percentage}
                  compact
                />
                <div>
                  <div className="mini-card-name">{credit.name}</div>
                  <div className="mini-card-rate">
                    Hasta {credit.amount.split(" – ")[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="catalogo" aria-labelledby="catalogo-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Productos disponibles</span>
            <h2 id="catalogo-title">Todos los créditos</h2>
            <p>
              Cinco productos pensados para distintos momentos de tu vida
              financiera. Los datos mostrados son fijos, de referencia.
            </p>
          </div>
          <div className="card-grid">
            {credits.map((credit) => (
              <CreditCard key={credit.id} credit={credit} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

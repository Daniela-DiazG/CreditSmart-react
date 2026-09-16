import { Link } from "react-router-dom";
import type { Credit } from "../data/credits";
import Icon from "./Icons";
import RateDial from "./RateDial";

export default function CreditCard({ credit }: { credit: Credit }) {
  return (
    <article className="credit-card">
      <div className="credit-card-top">
        <span className="credit-icon">
          <Icon name={credit.icon} />
        </span>
        <RateDial rate={credit.rate} percentage={credit.percentage} />
      </div>
      <h3>{credit.name}</h3>
      <p className="desc">{credit.description}</p>
      <div className="credit-meta">
        <div className="meta-item">
          <span>Monto</span>
          <b>{credit.amount}</b>
        </div>
        <div className="meta-item">
          <span>Plazo máx.</span>
          <b>{credit.term}</b>
        </div>
        <div className="meta-item">
          <span>Tasa</span>
          <b>{credit.rate}</b>
        </div>
        <div className="meta-item">
          <span>{credit.ageLabel}</span>
          <b>{credit.age}</b>
        </div>
      </div>
      <div className="credit-card-actions">
        <Link to="/solicitar" className="btn btn-primary btn-sm btn-block">
          Solicitar
        </Link>
        <Link to="/simulador" className="btn btn-ghost btn-sm">
          Simular
        </Link>
      </div>
    </article>
  );
}

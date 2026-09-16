import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegación principal">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Icon name="card" />
          </span>
          <span className="brand-text">
            CreditSmart
            <span className="brand-sub">FinTech Solutions S.A.S</span>
          </span>
        </NavLink>
        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/simulador" onClick={() => setOpen(false)}>
              Simulador
            </NavLink>
          </li>
          <li>
            <NavLink to="/solicitar" onClick={() => setOpen(false)}>
              Solicitar crédito
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

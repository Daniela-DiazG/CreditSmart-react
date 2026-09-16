export type Credit = {
  id: string;
  name: string;
  description: string;
  amount: string;
  maxAmount: number;
  term: string;
  rate: string;
  ageLabel: string;
  age: string;
  percentage: number;
  icon: "wallet" | "car" | "home" | "education" | "business";
};

export const credits: Credit[] = [
  {
    id: "libre-inversion",
    name: "Crédito Libre Inversión",
    description:
      "Financia lo que necesites: viajes, estudios, remodelaciones o consolidación de deudas, sin justificar el destino.",
    amount: "$1.000.000 – $50.000.000",
    maxAmount: 50000000,
    term: "60 meses",
    rate: "1,8% mensual",
    ageLabel: "Edad mínima",
    age: "18 años",
    percentage: 60,
    icon: "wallet",
  },
  {
    id: "vehiculo",
    name: "Crédito Vehículo",
    description:
      "Compra tu carro o moto nuevo o usado con financiación hasta del 90% y trámite de matrícula incluido.",
    amount: "$5.000.000 – $120.000.000",
    maxAmount: 120000000,
    term: "72 meses",
    rate: "1,4% mensual",
    ageLabel: "Edad mínima",
    age: "21 años",
    percentage: 47,
    icon: "car",
  },
  {
    id: "vivienda",
    name: "Crédito Vivienda",
    description:
      "Compra, construye o mejora tu vivienda con la tasa más baja del portafolio y plazos hasta de 20 años.",
    amount: "$20.000.000 – $400.000.000",
    maxAmount: 400000000,
    term: "240 meses",
    rate: "0,9% mensual",
    ageLabel: "Edad mínima",
    age: "23 años",
    percentage: 30,
    icon: "home",
  },
  {
    id: "educativo",
    name: "Crédito Educativo",
    description:
      "Cubre matrícula, materiales y sostenimiento en pregrado, posgrado o cursos de especialización.",
    amount: "$1.000.000 – $30.000.000",
    maxAmount: 30000000,
    term: "48 meses",
    rate: "1,2% mensual",
    ageLabel: "Edad mínima",
    age: "17 años",
    percentage: 40,
    icon: "education",
  },
  {
    id: "empresarial",
    name: "Crédito Empresarial",
    description:
      "Capital de trabajo, compra de maquinaria o expansión para pymes con mínimo un año de constituidas.",
    amount: "$5.000.000 – $200.000.000",
    maxAmount: 200000000,
    term: "84 meses",
    rate: "1,6% mensual",
    ageLabel: "Antigüedad",
    age: "1 año",
    percentage: 53,
    icon: "business",
  },
];

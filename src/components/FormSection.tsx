import type { ReactNode } from "react";

type FormSectionProps = {
  number: number;
  title: string;
  children: ReactNode;
};

export default function FormSection({
  number,
  title,
  children,
}: FormSectionProps) {
  return (
    <div className="form-section">
      <div className="form-section-title">
        <span className="form-section-num">{number}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
}

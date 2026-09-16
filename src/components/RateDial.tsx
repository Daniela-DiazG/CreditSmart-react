import type { CSSProperties } from "react";

export default function RateDial({
  rate,
  percentage,
  compact = false,
}: {
  rate: string;
  percentage: number;
  compact?: boolean;
}) {
  return (
    <div className="rate-dial" style={{ "--pct": percentage } as CSSProperties}>
      <div className="rate-dial-inner">
        <b>{rate.replace(" mensual", "")}</b>
        <span>{compact ? "MENSUAL" : "MES"}</span>
      </div>
    </div>
  );
}

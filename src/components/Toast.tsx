import Icon from "./Icons";

type ToastProps = {
  message: string;
  visible: boolean;
};

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div
      className={`toast${visible ? " visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      <Icon name="check" />
      <span>{message}</span>
    </div>
  );
}

import "./Toast.css";

export type ToastType = "created" | "updated" | "deleted";

interface ToastProps {
  type: ToastType;
  message: string;
  onDismiss: () => void;
}

function Toast({ type, message, onDismiss }: ToastProps) {
  return (
    <div className="toast" role="status">
      {/* TODO: message content + dismiss/auto-dismiss behavior */}
    </div>
  );
}

export default Toast;

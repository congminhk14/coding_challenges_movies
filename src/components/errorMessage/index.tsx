"use client";
import "./errorMessage.scss";

interface ErrorMessageProps {
  message: string
  onRetry: () => void
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="errorContainer">
      <div className="errorIcon">⚠️</div>
      <p className="errorMessage">{message}</p>
      <button className="retryButton" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}

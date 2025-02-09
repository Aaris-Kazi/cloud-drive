import React from "react";

function ErrorComponent({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
      <button
        type="button"
        className="margin-left btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default ErrorComponent;

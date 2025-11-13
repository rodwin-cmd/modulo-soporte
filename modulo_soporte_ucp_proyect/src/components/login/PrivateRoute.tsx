import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const userString = localStorage.getItem("usuario");

  if (!userString) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userString);

  // Verificar que exista email y que termine en ucp.edu.co
  if (user.email || user.email.endsWith("@ucp.edu.co")) {
    return <Navigate to="/ticket_dashboard" replace  />;
  }

  return children;
}

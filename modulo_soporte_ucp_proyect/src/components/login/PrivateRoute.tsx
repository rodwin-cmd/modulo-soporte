import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = localStorage.getItem("usuario");
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

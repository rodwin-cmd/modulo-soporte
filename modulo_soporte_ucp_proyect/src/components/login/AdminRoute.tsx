// src/components/AdminRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contextAut/AuthContext";

export function AdminRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (!user) return <Navigate to="/login" replace />;

  // 👇 Define aquí quién es “soporte”
  const soporteEmails = ["soporte@ucp.edu.co", "admin@ucp.edu.co"];

  if (!soporteEmails.includes(user.email || "")) {
    return <Navigate to="/ticket_soporte" replace />;
  }

  return children;
}

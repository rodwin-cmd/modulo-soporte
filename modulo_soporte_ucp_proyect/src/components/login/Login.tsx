import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Guarda usuario en localStorage
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/ticket_soporte");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Inicia sesión con Google</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Iniciar sesión
      </button>
    </div>
  );
}

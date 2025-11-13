import { useState } from "react";

export function TicketSoporte() {
  const [formData, setFormData] = useState({
    id_usuario: "1",
    asunto: "Error al iniciar sesión",
    descripcion: "No puedo acceder al módulo de soporte",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Ticket creado correctamente.");
        setFormData({ id_usuario: "", asunto: "", descripcion: "" });
      } else {
        setMessage(`⚠️ Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 py-12 px-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Crear nuevo ticket de soporte
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ID Usuario */}
          <div>
            <label htmlFor="id_usuario" className="block text-sm font-medium text-gray-700">
              ID del Usuario
            </label>
            <input
              type="number"
              id="id_usuario"
              name="id_usuario"
              value={formData.id_usuario}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 p-3"
              placeholder="Ejemplo: 101"
              required
            />
          </div>

          {/* Asunto */}
          <div>
            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
              Asunto del ticket
            </label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 p-3"
              placeholder="Describe brevemente el problema"
              required
            />
          </div>

          {/* Descripción */}
          <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows={4}
              value={formData.descripcion}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 p-3 resize-none"
              placeholder="Detalla tu incidencia o duda..."
              required
            />
          </div>

          {/* Botón */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-xl font-semibold text-white ${
                loading ? "bg-green-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              } transition-all duration-200`}
            >
              {loading ? "Enviando..." : "Crear Ticket"}
            </button>
          </div>
        </form>

        {/* Mensaje de éxito o error */}
        {message && (
          <p className="text-center mt-6 text-sm font-medium text-gray-800">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

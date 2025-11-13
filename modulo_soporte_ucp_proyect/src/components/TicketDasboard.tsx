import { useEffect, useState } from "react";

type Ticket = {
  id_ticket: number;
  id_usuario: number;
  asunto: string;
  descripcion: string;
  estado: "abierto" | "en_proceso" | "cerrado";
  fecha_creacion: string;
};

export function TicketDashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchTickets = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/tickets");
      const data = await res.json();
      setTickets(data);
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al cargar tickets");
    } finally {
      setLoading(false);
    }
  };

  const updateEstado = async (id: number, nuevoEstado: string) => {
    try {
      await fetch(`http://localhost:4000/api/tickets/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado: nuevoEstado }),
      });
      setMessage("✅ Estado actualizado");
      fetchTickets();
    } catch (error) {
      setMessage("error");
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Panel de Tickets de Soporte
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Cargando tickets...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Usuario</th>
                  <th className="px-4 py-3">Asunto</th>
                  <th className="px-4 py-3">Descripción</th>
                  <th className="px-4 py-3">Estado</th>
                  <th className="px-4 py-3">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t) => (
                  <tr
                    key={t.id_ticket}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-gray-800">{t.id_ticket}</td>
                    <td className="px-4 py-3">{t.id_usuario}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{t.asunto}</td>
                    <td className="px-4 py-3 text-gray-600">{t.descripcion}</td>
                    <td className="px-4 py-3">
                      <select
                        value={t.estado}
                        onChange={(e) => updateEstado(t.id_ticket, e.target.value)}
                        className={`rounded-lg border p-2 ${
                          t.estado === "cerrado"
                            ? "bg-red-100 text-red-600"
                            : t.estado === "en_proceso"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        <option value="abierto">Abierto</option>
                        <option value="en_proceso">En proceso</option>
                        <option value="cerrado">Cerrado</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-sm">
                      {new Date(t.fecha_creacion).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {message && (
          <p className="text-center mt-6 text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

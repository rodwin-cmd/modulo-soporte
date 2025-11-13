import express from "express";
import cors from "cors";
import { db } from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/tickets", async (req, res) => {
  const { id_usuario, asunto, descripcion } = req.body;



  try {
    const [result] = await db.execute(
      "INSERT INTO ticketsSoporte (id_usuario, asunto, descripcion) VALUES (?, ?, ?)",
      [id_usuario, asunto, descripcion]
    );

    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error("❌ Error al crear ticket:", err);
    res.status(500).json({ message: "Error al crear el ticket" });
  }
});

app.get("/api/tickets", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM ticketsSoporte");
    res.json(rows);
  } catch (err) {
    console.error("❌ Error al obtener tickets:", err);
    res.status(500).json({ message: "Error al obtener tickets" });
  }
});

// ✅ Actualizar estado del ticket
app.put("/api/tickets/:id", async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  try {
    const [result] = await db.execute(
      "UPDATE ticketsSoporte SET estado = ? WHERE id_ticket = ?",
      [estado, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Ticket no encontrado" });
    }

    res.json({ message: "Estado actualizado correctamente" });
  } catch (err) {
    console.error("❌ Error al actualizar ticket:", err);
    res.status(500).json({ message: "Error al actualizar ticket" });
  }
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

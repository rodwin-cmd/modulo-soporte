import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "localhost",
  user: "root", // cambia según tu configuración
  password: "12345678", // coloca tu contraseña si aplica
  database: "plataforma_cursos", // asegúrate que exista en MySQL
});

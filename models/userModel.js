export const insertJugador = `INSERT INTO jugadores (nombre,apellido,edad,id_categoria,id_estado,contacto) VALUES(?,?,?,?,?,?)`;
export const createUserQuery =
  "INSERT INTO usuarios (nombre, password,correo,rol_id) VALUES (?, ?, ?, ?)";
export const intentoLog = "SELECT * FROM usuarios WHERE nombre = ?  ";
export const consultaJugadores = `SELECT JU.*, EST.estado , CAT.nombre AS categoria_nombre
       FROM jugadores JU 
       INNER JOIN estado_jugadores EST ON  JU.id_estado = EST.id 
       INNER JOIN categorias CAT ON  JU.id_categoria = CAT.id`;
export const consultaEntrenadores = `SELECT ENT.nombre AS entrenador_nombre, ENT.apellido AS entrenador_apellido, 
       CAT.nombre AS categoria_nombre, 
       COUNT(JU.id) AS cantidad_jugadores
FROM entrenadores ENT
INNER JOIN categorias CAT ON ENT.id_categoria = CAT.id
LEFT JOIN jugadores JU ON JU.id_categoria = CAT.id
GROUP BY ENT.id, ENT.nombre, ENT.apellido, CAT.nombre;`;
export const consultaCategoria = `SELECT CAT.id AS categoria_id, CAT.nombre AS categoria_nombre, COUNT(JU.id) AS cantidad_jugadores
FROM categorias CAT
LEFT JOIN jugadores JU ON JU.id_categoria = CAT.id
GROUP BY CAT.id, CAT.nombre`;

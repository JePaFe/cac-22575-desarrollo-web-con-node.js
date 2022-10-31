# INSERT INTO categorias (id, nombre) VALUES (null, 'Categoria 11');
# INSERT INTO categorias VALUES (null, 'Categoria 12');

# INSERT INTO categorias (nombre) VALUES ('Categoria 20'); 

INSERT INTO categorias (nombre) 
VALUES ('Categoria 30'), 
('Categoria 31'), 
('Categoria 35');

# ---

# SELECT * FROM categorias
# SELECT nombre FROM categorias
# SELECT * FROM categorias WHERE id > 10 LIMIT 3

# SELECT * FROM categorias ORDER BY id
# SELECT * FROM categorias WHERE id > 10 ORDER BY id DESC LIMIT 3

# ---

UPDATE categorias 
SET nombre = 'Categoria Promo'
WHERE id = 3

# SELECT * FROM categorias WHERE id = 3

# ---

DELETE FROM categorias 
WHERE nombre = 11

# ---

SELECT productos.id AS producto_id, 
productos.nombre AS Producto, 
categorias.nombre AS Categoria
FROM productos
INNER JOIN categorias ON categorias.id = productos.categoria_id

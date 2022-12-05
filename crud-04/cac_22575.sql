-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para cac_22575
CREATE DATABASE IF NOT EXISTS `cac_22575` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cac_22575`;

-- Volcando estructura para tabla cac_22575.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla cac_22575.categorias: ~8 rows (aproximadamente)
INSERT INTO `categorias` (`id`, `nombre`) VALUES
	(1, 'Categoria 1'),
	(2, 'Categoria 3'),
	(3, 'Promos'),
	(10, 'Categoria 10'),
	(11, 'Categoria 11'),
	(12, 'Categoria 12'),
	(13, 'Categoria 20'),
	(15, 'Categoria 31');

-- Volcando estructura para tabla cac_22575.noticias
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `imagen` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contenido` text COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla cac_22575.noticias: ~4 rows (aproximadamente)
INSERT INTO `noticias` (`id`, `titulo`, `imagen`, `contenido`, `createdAt`, `updatedAt`) VALUES
	(1, 'Noticia 1', NULL, '', '2022-11-28 14:47:35', '2022-11-28 14:47:35'),
	(2, 'Noticias 2', NULL, '', '2022-11-28 14:48:12', '2022-11-28 14:48:12'),
	(6, 'Noticia 6', NULL, '1. Etiam dictum tempus nunc eget malesuada. Suspendisse hendrerit semper felis eu ullamcorper. Praesent et ante ac lacus dapibus consectetur. Nulla facilisi. Praesent et purus dictum, hendrerit elit non, viverra risus. Suspendisse nibh enim, pretium maximus vestibulum et, placerat a nisl. Phasellus placerat turpis a urna finibus, sit amet iaculis nunc ultrices. Donec vel elit ut lorem iaculis scelerisque vitae id felis. Pellentesque quis consequat orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pharetra diam ante, id venenatis mauris varius a.\r\n\r\n2. Aenean ut erat felis. Fusce blandit et nibh non vulputate. Vivamus et eros at orci sodales tempor. Cras sollicitudin nulla sit amet molestie congue. Ut tempus dictum risus nec sagittis. Etiam et elit vitae tellus suscipit bibendum a a nunc. Quisque ullamcorper tristique posuere. Vestibulum neque erat, viverra id laoreet a, semper ut eros. Ut scelerisque rutrum urna, nec consectetur diam cursus at.', '2022-12-05 14:23:09', '2022-12-05 14:26:48'),
	(8, 'Noticia Validada 2', NULL, 'Aenean ut erat felis. Fusce blandit et nibh non vulputate. Vivamus et eros at orci sodales tempor. Cras sollicitudin nulla sit amet molestie congue. Ut tempus dictum risus nec sagittis. Etiam et elit vitae tellus suscipit bibendum a a nunc. Quisque ullamcorper tristique posuere. Vestibulum neque erat, viverra id laoreet a, semper ut eros. Ut scelerisque rutrum urna, nec consectetur diam cursus at.', '2022-12-05 14:36:43', '2022-12-05 14:36:54');

-- Volcando estructura para tabla cac_22575.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nro_producto` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `promo` tinyint unsigned NOT NULL DEFAULT '0',
  `categoria_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos_categorias` (`categoria_id`),
  CONSTRAINT `FK_productos_categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla cac_22575.productos: ~3 rows (aproximadamente)
INSERT INTO `productos` (`id`, `nro_producto`, `nombre`, `descripcion`, `promo`, `categoria_id`) VALUES
	(1, 'ABC123', 'Prod 1', '...', 0, 1),
	(2, 'ABC321', 'Prod 4', '...', 1, 3),
	(3, 'eweqewq', 'ewew', 'ewewew', 0, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

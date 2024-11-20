-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-11-2024 a las 19:46:01
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_constructora`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogos`
--

DROP TABLE IF EXISTS `catalogos`;
CREATE TABLE IF NOT EXISTS `catalogos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `catalogos`
--

INSERT INTO `catalogos` (`id`, `nombre`, `tipo`, `descripcion`, `imagen`) VALUES
(2, 'Construcción de Edificio A', 'Proyecto Habitacional', 'Proyecto residencial que consiste en la construcción de un edificio de 10 pisos en el centro de la ciudad', 'edificio_a.jpg'),
(3, 'Rehabilitación de Puente B', 'Proyecto Infraestructura', 'Rehabilitación completa de puente vehicular en la zona norte de la ciudad', 'puente_b.jpg'),
(4, 'Planta Industrial C', 'Proyecto Industrial', 'Construcción de planta industrial para procesamiento de productos químicos', 'planta_industrial_c.jpg'),
(5, 'Acondicionamiento de Oficina D', 'Proyecto Comercial', 'Renovación y acondicionamiento de oficinas corporativas en zona empresarial', 'oficina_d.jpg'),
(6, 'Parque Ecológico E', 'Proyecto Ecológico', 'Desarrollo de parque ecológico y recreativo en área rural', 'parque_ecologico_e.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

DROP TABLE IF EXISTS `citas`;
CREATE TABLE IF NOT EXISTS `citas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `hora` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `proyectoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_251a2ca95cc72e921666ad9c541` (`proyectoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_catalogo`
--

DROP TABLE IF EXISTS `imagenes_catalogo`;
CREATE TABLE IF NOT EXISTS `imagenes_catalogo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ruta_imagen` varchar(255) NOT NULL,
  `descripcion_imagen` varchar(255) DEFAULT NULL,
  `catalogoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_268660bfaf7e596a16ceb538a35` (`catalogoId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `imagenes_catalogo`
--

INSERT INTO `imagenes_catalogo` (`id`, `ruta_imagen`, `descripcion_imagen`, `catalogoId`) VALUES
(5, 'puente_b_1.jpg', 'Trabajos de rehabilitación del puente B', 2),
(6, 'puente_b_2.jpg', 'Puente B en fase de demolición', 2),
(7, 'planta_industrial_c_1.jpg', 'Construcción de la planta industrial C', 3),
(8, 'planta_industrial_c_2.jpg', 'Vista interior de la planta industrial C', 3),
(9, 'oficina_d_1.jpg', 'Renovación de la oficina D', 4),
(10, 'oficina_d_2.jpg', 'Acondicionamiento de la sala de juntas', 4),
(11, 'parque_ecologico_e_1.jpg', 'Desarrollo de senderos en el parque ecológico E', 5),
(12, 'parque_ecologico_e_2.jpg', 'Área de recreación del parque ecológico E', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
CREATE TABLE IF NOT EXISTS `proyecto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `FK_251a2ca95cc72e921666ad9c541` FOREIGN KEY (`proyectoId`) REFERENCES `proyecto` (`id`);

--
-- Filtros para la tabla `imagenes_catalogo`
--
ALTER TABLE `imagenes_catalogo`
  ADD CONSTRAINT `FK_268660bfaf7e596a16ceb538a35` FOREIGN KEY (`catalogoId`) REFERENCES `catalogos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

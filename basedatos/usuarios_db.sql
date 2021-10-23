-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-10-2021 a las 00:47:35
-- Versión del servidor: 10.3.31-MariaDB-0ubuntu0.20.04.1
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Maquina_db`
--

CREATE TABLE `Maquina_db` (
  `IdMaquina` int(30) NOT NULL,
  `RefMaquina` varchar(30) NOT NULL,
  `DescMaquina` varchar(300) NOT NULL,
  `FechaMaquina` varchar(30) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Maquina_db`
--

INSERT INTO `Maquina_db` (`IdMaquina`, `RefMaquina`, `DescMaquina`, `FechaMaquina`) VALUES
(1, '1', 'cortadora y estruxadora de plastico', 'current_timestamp()'),
(2, '2', 'scanner de metales', 'current_timestamp()');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE `perfil` (
  `per_IdUsuario` int(5) NOT NULL,
  `per_usuario` varchar(30) NOT NULL,
  `per_contrasena` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`per_IdUsuario`, `per_usuario`, `per_contrasena`) VALUES
(1, 'diego', 'quiroz'),
(2, 'domi', 'quiroz'),
(3, 'dani', 'quiroz'),
(4, 'sami', 'quiroz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Registro_db`
--

CREATE TABLE `Registro_db` (
  `IdUsuario` int(4) NOT NULL,
  `NombreUsuario` varchar(30) NOT NULL,
  `ContrasenaUsuario` varchar(30) NOT NULL,
  `PerfilUsuario` varchar(30) NOT NULL,
  `TelefonoUsuario` varchar(30) NOT NULL,
  `CorreoUsuario` varchar(30) NOT NULL,
  `PaisUsuario` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Registro_db`
--

INSERT INTO `Registro_db` (`IdUsuario`, `NombreUsuario`, `ContrasenaUsuario`, `PerfilUsuario`, `TelefonoUsuario`, `CorreoUsuario`, `PaisUsuario`) VALUES
(1, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'mongo'),
(2, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'panama'),
(3, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'panama'),
(4, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'australia'),
(5, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'españa'),
(6, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'uruguay'),
(7, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'uruguay'),
(8, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'canada'),
(9, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'francia'),
(10, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'mexico'),
(11, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'bolivia'),
(12, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(13, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'ecuador'),
(14, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'ecuador'),
(15, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(16, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(17, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(18, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(19, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(20, 'diego', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(21, 'diego', 'quiroz', 'operador', '3043537712', '', 'chile'),
(22, 'pedro', 'hola', 'operador', '3043537712', 'diegounivall@hotmail.com', 'nicaragua'),
(23, 'reina', 'isabel', 'fabricante', '3043537712', 'diegounivall@hotmail.com', 'inglaterra'),
(24, 'pedro', 'hola', 'operador', '3043537712', 'diegounivall@hotmail.com', 'Jamaica'),
(25, 'reina', 'isabel', 'fabricante', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(26, 'reina', 'isabel', 'fabricante', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(27, 'reina', 'isabel', 'fabricante', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(28, 'reina', 'isabel', 'fabricante', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(29, 'pedro', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'brasil'),
(30, 'pedro', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(31, 'pedro', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(32, 'pedro', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'peru'),
(33, 'pedro', 'quiroz', 'operador', '3043537712', 'diegounivall@hotmail.com', 'peru');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Solucion_db`
--

CREATE TABLE `Solucion_db` (
  `IdSolucion` int(5) NOT NULL,
  `RefMaquina` varchar(30) NOT NULL,
  `DescSolucion` varchar(300) NOT NULL,
  `FechaSolucion` varchar(30) NOT NULL DEFAULT current_timestamp(),
  `IdUsuario` int(11) NOT NULL,
  `IdMaquina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Solucion_db`
--

INSERT INTO `Solucion_db` (`IdSolucion`, `RefMaquina`, `DescSolucion`, `FechaSolucion`, `IdUsuario`, `IdMaquina`) VALUES
(1, '1', 'dano electrico: la maquina enciende y se apaga continuamente, cambiar fusible principal de 5 amp por uno de 20 amp', '2021-10-19 22:33:18', 22, 1),
(2, '1', 'dano mecanico: la maquina se saltaba la transmision porque estaba muy revolucionada, se soluciono con cambiar piñon ppal de 30 dientes a 60 dientes', '2021-10-19 22:38:18', 22, 1),
(3, '1', 'dano instrumentacion: se cambia sensor de miliamperios a milivoltios', '2021-10-19 22:50:42', 22, 1),
(4, '1', 'dano instrumentacion: se cambia sensor de miliamperios a milivoltios', '2021-10-19 22:51:45', 22, 1),
(5, '1', 'dano electrico: se cambia breaker de 15 amp por uno de 20 amp', '2021-10-19 22:53:11', 22, 1),
(6, '1', 'dano electrico: la maquina va muy lenta, se cambia motor de 2hp por uno de 2.5hp', '2021-10-19 22:57:24', 22, 1),
(7, '1', 'dano elecrico: se cambia el arrancador suave por un contactor y arranque directo', '2021-10-19 22:59:46', 22, 1),
(8, '1', 'dano electrico: se cambia el extractor', '2021-10-19 23:05:21', 22, 1),
(9, '1', 'dano electrico: se cambia el extractor', '2021-10-19 23:11:17', 22, 1),
(10, '1', 'dano mecanico: se pone tapon', '2021-10-19 23:13:14', 22, 1),
(11, '1', 'dano mecanico: se pone tapon', '2021-10-19 23:36:55', 22, 1),
(12, '1', 'dano mecanico: se pone tapon', '2021-10-19 23:37:27', 22, 1),
(13, '1', 'dano electrico: cambiar fuente 200w por una de 500w', '2021-10-20 22:41:21', 22, 1),
(14, '1', 'dano electrico: cambiar cable 12 por 8', '2021-10-20 23:14:40', 22, 1),
(15, '1', 'dano electrico: cambiar palanca de arranque por una perilla', '2021-10-20 23:16:31', 22, 1),
(16, '1', 'cambiar la maquina', '2021-10-20 23:27:16', 1, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Maquina_db`
--
ALTER TABLE `Maquina_db`
  ADD PRIMARY KEY (`IdMaquina`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
  ADD PRIMARY KEY (`per_IdUsuario`);

--
-- Indices de la tabla `Registro_db`
--
ALTER TABLE `Registro_db`
  ADD PRIMARY KEY (`IdUsuario`);

--
-- Indices de la tabla `Solucion_db`
--
ALTER TABLE `Solucion_db`
  ADD PRIMARY KEY (`IdSolucion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Maquina_db`
--
ALTER TABLE `Maquina_db`
  MODIFY `IdMaquina` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
  MODIFY `per_IdUsuario` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `Registro_db`
--
ALTER TABLE `Registro_db`
  MODIFY `IdUsuario` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `Solucion_db`
--
ALTER TABLE `Solucion_db`
  MODIFY `IdSolucion` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

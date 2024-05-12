-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 12 mai 2024 à 19:42
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dbprayer`
--

-- --------------------------------------------------------

--
-- Structure de la table `prayer`
--

CREATE TABLE `prayer` (
  `id` int(30) NOT NULL,
  `name` varchar(255) NOT NULL,
  `completeAt` varchar(255) NOT NULL,
  `isComplete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `prayer`
--

INSERT INTO `prayer` (`id`, `name`, `completeAt`, `isComplete`) VALUES
(29, 'Souba', '06:05', 0),
(30, 'Takusan', '14:15', 0),
(31, 'Timis', '19:35', 0),
(33, 'Guéé', '20:00', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `prayer`
--
ALTER TABLE `prayer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `prayer`
--
ALTER TABLE `prayer`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;


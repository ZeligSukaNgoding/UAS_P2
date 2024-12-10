-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2024 at 04:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_rafael_p2`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `sword` varchar(255) DEFAULT NULL,
  `village` varchar(255) DEFAULT NULL,
  `jutsu` varchar(255) DEFAULT NULL,
  `abilities` varchar(255) DEFAULT NULL,
  `team` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `nama`, `gender`, `sword`, `village`, `jutsu`, `abilities`, `team`, `description`) VALUES
(6, 'Jinin Akebino', 'Male', 'Kabutowari.', 'Kirigakure', 'Water Style', 'Silent Killing', 'Seven Ninja Swordsmen of the Mist', 'Jinin Akebino was a jōnin from Kirigakure, and a member of the Seven Ninja Swordsmen of the Mist.'),
(7, 'Jūzō Biwa', 'Male', 'Kubikiribōchō.', 'Kirigakure', 'Water Style', 'Water Clone', 'Seven Ninja Swordsmen of the Mist', 'Jūzō Biwa was a jōnin from Kirigakure and a member of the Seven Ninja Swordsmen of the Mist. In the anime, Jūzō deserted his village and became a member of Akatsuki, where he was partnered with Itachi Uchiha'),
(8, 'Kisame Hoshigaki', 'Male', 'Samehada', 'Kirigakure', 'Water Release', 'Water Prison Shark Dance Technique', 'Seven Ninja Swordsmen of the Mist', 'Feared as the Monster of the Hidden Mist, was a shinobi of Kirigakure\'s Hoshigaki Clan. After joining the Seven Ninja Swordsmen of the Mist, he became an S-rank missing-nin and was partnered with Itachi Uchiha when the latter joined Akatsuki.'),
(9, 'Kushimaru Kuriarare', 'Male', 'Nuibari', 'Kirigakure', 'Longsword Ninja Art — Earth Spider Sewing', 'Silent Killing', 'Seven Ninja Swordsmen of the Mist', 'Kushimaru Kuriarare was a Kirigakure jōnin and a member of the Seven Ninja Swordsmen of the Mist.'),
(10, 'Raiga Kurosuki', 'Male', 'Kiba, Twin Swords', 'Kirigakure', 'Lightning Release', 'Lightning Burial: Banquet of Lightning', 'Seven Ninja Swordsmen of the Mist', 'Raiga Kurosuki renowned as the Thunder of the Hidden Mist was a jōnin from Kirigakure as well as a member of the Seven Ninja Swordsmen of the Mist.'),
(11, 'Jinpachi Munashi', 'Male', 'Shibuki', 'Kirigakure', 'Blastsword Technique: Blasting Bridle Repeating Death ', 'Explosive Tag', 'Seven Ninja Swordsmen of the Mist', 'Jinpachi Munashi was a jōnin from Kirigakure and a member of the previous generation of the Seven Ninja Swordsmen of the Mist.'),
(12, 'Mangetsu Hōzuki', 'Male', 'Hiramekarei', 'Kirigakure', 'Hydrification Technique', 'Water Release', 'Seven Ninja Swordsmen of the Mist', 'Mangetsu Hōzuki, reputed as the Second Coming of the Demon  was a shinobi from Kirigakure\'s Hōzuki clan, and a member of the previous generation of the Seven Ninja Swordsmen of the Mist.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

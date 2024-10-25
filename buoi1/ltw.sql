-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 25, 2024 lúc 08:53 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ltwnc_buoi3_node`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `address` text DEFAULT NULL,
  `sex` enum('male','female','other') NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(50) DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fullname`, `address`, `sex`, `email`, `role`) VALUES
(1, 'nguyen_tuan22224', '$2a$10$eLWQHV9MeoOxEtKrueCYlueRn6Ercq0/S5JQIdo/XJpCTs7TRhi52', 'Nguyễn Tuấn Anh', '123 Đường Láng, Hà Nội', 'male', 'nguyen.tuan@example.com', 'user'),
(7, '22222ttt', '$2a$10$0sJmf7YdXnOH6GJRzld7UeaUAyReoJFZFIKA8xBrbwy9x7WE0FUka', '123, 3abc', 'q a', 'male', 'duy3@gmail.com', 'user'),
(11, 'test12222', '222', '123, 3abc', '333333', 'male', '3333333@gmail.com', 'user'),
(12, 'test1', '$2a$10$fD2Z4J5/0ZuBCQhL9Tx7N.iYra7b1XXFNbKdJGUrqN/wIBUKUQhbK', '123, 3abc', '333333', 'male', '33333323@gmail.com', 'admin'),
(15, 'test', '$2a$10$sO8dYGiQd0gEbjI4FGid9O13L/BswLi0tWw0yE6pV66k.ILxUm5T.', '123, 3abc22', '3333334', 'male', '2222222222233@gmail.com', 'admin'),
(16, 'test444', '$2a$10$Y115VD.WJOFomjwxPxraUu/lNl4rNjmi.XQudxcT3j0Zd70BApZ6G', '123, 3abc22', '3333334', 'male', '2222222222222233@gmail.com', 'user'),
(17, 'nguyen_tuan5', '$2a$10$OkBesB/H3qjqrI2kKNgz5unv/rU7P5YZUvYKtTJ7Ry0QOUDEGaeFW', 'Nguyễn Tuấn Anh', '123 Đường Láng, Hà Nội', 'male', 'nguyen.tuan2003@example.com', 'user'),
(18, 'nguyen_tuan55', '$2a$10$DA5/lLtp.IbvrT43Pbr9OOHqT7xLhm1ZDujFPa6OKZT.M3u69yeui', 'Nguyễn Tuấn Anh', '123 Đường Láng, Hà Nội', 'male', 'nguyen.tuan20032@example.com', 'user');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

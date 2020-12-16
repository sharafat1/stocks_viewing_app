-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: webcomputing
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(80) NOT NULL,
  `hash` varchar(70) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'api@exampe.com','$2b$10$WNttaF8imPb5mClskj2OPO6duKbr54HoJlXr55Rbk4GFJCS0hHKjm'),(2,'example@api.com','$2b$10$yEIlrJujIuAx9ilYLJWAL.Bb6b5BywzFt3vx0GaHoNIO84t/oAEu6'),(3,'ad40a814-68ef-41c8-938c-a350d08d33e9@fake-email.com','$2b$10$g6uRd1Ccq.zya8M3SRkcJerYzJz07BSNDON6R8sXw3sv3GdPgLPuK'),(4,'629707ba-d17a-45e2-be12-6643d2ef1c83@fake-email.com','$2b$10$u2pwpDkuqz6YtJMPWH2KE.hot08yVA8OQKIZLCalOV8RydqMYH8dW'),(5,'1348a8ff-82b5-4e89-a78a-5a049e54c514@fake-email.com','$2b$10$nFdzYq1GUghS11XsvkNRzeRoZr21wqSArda3Q.ojKpFhx2rO21D2y'),(6,'599d9dc3-62d3-4b5a-b393-800f684fd1a8@fake-email.com','$2b$10$gDIWvtf6KTaN93ZUdryQMOkJuSBnLeX5AKxJV/uvvjgOIudp1pKcu'),(7,'53c18c3a-9f66-494d-86c4-72e35eca01b2@fake-email.com','$2b$10$upUoeqp6ZxpwoN1Z7FIA0u9I.hJUfM3TFadAld/EQVtN3jdFG3PjC'),(8,'a69f498d-95a9-47f8-97be-785104b98047@fake-email.com','$2b$10$KdyGxMiyX8qHCXABxj3xzurVK2.C6RSLqDBaZKxoGgNG6.iI3MaTu'),(9,'4ca940a4-4843-49ca-9701-e65aca5928da@fake-email.com','$2b$10$OHZNQPLQNk6xd/Xg3FBL0.eADbHbqzSpZbXOTMXMOKPF031HVvMU.'),(10,'47148926-a724-4efb-8eb0-ca9cee635afb@fake-email.com','$2b$10$R6kdfOEsi2V0nWNAdeucj.wtZkYHcwJVFOvWjpPnei1NSckZwQtom'),(11,'a8d0e24e-9f2c-4dde-8697-7cd34cf98f7e@fake-email.com','$2b$10$ZdlHQXXAQ89NRfaQrRkwtuiBIfsSSh/wY98MaqSAbx/M/3SfMlY5a'),(12,'ebfa7a56-9fe8-4127-a81e-fb26616b46ae@fake-email.com','$2b$10$KKTH06VzM15eDpUm6OCP1ONseH9VvKx4GOmXAN66j/abRHDg257nC'),(13,'b487d599-3f4d-4b5e-bbf3-10601b50395c@fake-email.com','$2b$10$kWM29PgzcN4N60BR58dcw.xczXIp0YaPiAWB7GYpIuf60la78Ay1O'),(14,'ac1de871-d0f4-46cd-8a6d-eb0890abe104@fake-email.com','$2b$10$BwSpPwDRmOixCOmd4FVkdu80xXOeyY.Peu5v7tfU7gcrYeBG4y8/a'),(15,'4369c7d6-a0ad-4f1c-bfe6-3521d8f142f4@fake-email.com','$2b$10$uZ0reu12wbiOAkrsZScDA.BH7CBmblcrebNsfCpC34LnSxOr4zFze'),(16,'96c4532a-0f39-4bc2-9129-8938feccea0d@fake-email.com','$2b$10$xom88//2/s/Vfe3Ij5ODq.3E9LCivof0J/HN4p48t04c4.QPqq8bm'),(17,'0728987f-ccb4-4945-aaec-06026a5c4ff5@fake-email.com','$2b$10$C9mfvfpEpOrAA9ozIkUpDONTqLp/thD36vGhHlptmHvC1XE2jvHuy'),(18,'cf013865-6682-4dfa-8334-da0f52cc14a0@fake-email.com','$2b$10$xQo.O5CKok2iiA9jPMjAP.WG38MhfMFtMNODDF4K1aGz0fzvzg6Ya'),(19,'bea8a9cb-dc4f-47df-8167-d35ef425a427@fake-email.com','$2b$10$d/oUZ1PZ555WB8biAa0FfOi8c9ZJ9460I6XtkNUpDqSuupflKI5N2'),(20,'51c66850-c9f1-487f-bfc7-9f82e713ce9e@fake-email.com','$2b$10$v1Tgh7PbdI6j8p4UfI9zdOVFjSRO488uRR4EtdwQkFtgrM6I7lMDO'),(21,'0f1f851e-8b94-4c67-8da4-460c6d77a45f@fake-email.com','$2b$10$JJGKmu3Sc0TDErWdDmx/nulQetl5Oi/SX3We27tSLakIoZA0ulNpi'),(22,'1bfbd850-c056-4b49-b8ff-7ff759b3066e@fake-email.com','$2b$10$AFXIVS6ZJ/GckvjjRAXhB.HVbiOVeYj7vP5RZlp4WHkBMWPHMGVyy'),(23,'9d4b16b9-2aca-4eb4-8f19-aada5aec3020@fake-email.com','$2b$10$mbsdJMAOToO.ZqQclyh.w.g50VJF7mQKvByEQsta4h2WUFuRqwLmu'),(24,'a8b021af-d584-41c6-8250-5316a4310261@fake-email.com','$2b$10$6Nq.3h9RaY.Df7wznSa05OM7l2cTy7gV.NQRL4vKsPOACsOQf5D3q'),(25,'742abce7-e041-48bf-a68b-3046f8b03028@fake-email.com','$2b$10$xNGc2r2t8E9IYNZjafouguDXMkh04zEjDDKim1vklBQ.YJznSPKIS'),(26,'9df2b703-1407-482e-98c4-19e2bc6374eb@fake-email.com','$2b$10$URY9LYO7yZv7yxzcyXe3tuaB0n2qLnxgS0lof.6rQVXW/QzxG0PHa'),(27,'efb6c9bb-4cbe-4586-bfb4-dde8abbd2b9a@fake-email.com','$2b$10$epYkfco1aKc8Cg/3fdlNCuz9ZtgVkEsizP7dvxPPlvasSqdeL5By.'),(28,'3b9c43b8-d0b2-401e-8ee7-64a91b8a956f@fake-email.com','$2b$10$YoNygg1bKlL9L76li3XcG.wBPTAP6Z3vwRZWJ33ticSuvdEGuCTu.'),(29,'7105d4f7-7933-48dd-a057-1e546819957a@fake-email.com','$2b$10$eydh5UnjEhu1YsrkErtPtuFCq13elj3.SE9N4gg7i5w4qCwezh5Ki'),(30,'1dbeb66b-2988-4fb8-946a-fd51fd8a010a@fake-email.com','$2b$10$lyDEb5NjIVy/XpxfOcprk.8T49wXJIAR7wlBpwj/JddsK1CnwFykW'),(31,'7569606a-1d81-46d0-87a8-974d80d463c8@fake-email.com','$2b$10$ZyJUAKEyF/aKAbOscFhA.eaUG0w46BGQA52K9M96xVDU9URoTqZFi'),(32,'f6ef75c3-f0dc-486f-a31b-b70427acaefa@fake-email.com','$2b$10$e5Ieht8ifk1aToEhubHCxu9PC/.Oj/UzbG88at9Ltok9.NMfYnhcW'),(33,'edb2c30c-3782-4575-921e-4f8489b596cf@fake-email.com','$2b$10$FG2nZQFYzha17nc/8rW3Aub6L5sbNxjLViEoaJl/mIeBUDEr1K7Zu'),(34,'a5b2ff32-32da-42ac-b0bc-696f7c242454@fake-email.com','$2b$10$0dg8i9BDdeqpUstwkQFC9uYzlZ5jnFEMLJst4z4NFqHWTcPwBhlxq'),(35,'ad6541e6-2fd1-4a69-858b-dfb72d0de71c@fake-email.com','$2b$10$AGdvzkug9OT9A.HwkH2TfumRTNvjGWO3PvcumnlnR6j0zoq/dIvhK'),(36,'ef87968b-4438-4750-9a45-9cb8d4ad8d6c@fake-email.com','$2b$10$xAu3jd5Tkk73Y7F7qsIHX.i2Z9uLkgXG30Ch5WeSlgYZCYWwxB9bW'),(37,'d80cd717-ed20-480a-b028-abead6497bfb@fake-email.com','$2b$10$igEeygMfxb/9IH1/BCe6KuHsAc2O.rx13.V1cuUPc2JqEpwTbNVji'),(38,'808da223-fed0-4647-b387-83cdca12edcb@fake-email.com','$2b$10$bU0T/C.rPN9RP2N95.fA8uFnd7HaAnr.qrecWcYzwrQyMsnY1gogK'),(39,'5566ef7b-1395-4362-bd15-cf4e0304668c@fake-email.com','$2b$10$/LQliMypy9Mco5GiVT2TO.EnhXUB8L6AcMFOUn9hfZXdpoVAss3xq'),(40,'a288e37d-4916-41ab-ad4d-0cf4acb49518@fake-email.com','$2b$10$JHtM0e1c2FbzVfuKdnFTo.C09wBelqDENEr6/dVEkyMjVBokzilca'),(41,'e4258a10-60d0-4ed0-87fc-edb708320a09@fake-email.com','$2b$10$E6PO/0xjc9Wp7oGDQGiWouzKX0qCCh4fbxt77hQhm2y0tJcwJbIPu'),(42,'c9c570a6-9f66-4112-a0d4-f378e35c3289@fake-email.com','$2b$10$VTEWcNX5cMu1Z4U6FaN7w./Knstf3XBGIVWU4dsPrgjfsd7phZXhK'),(43,'17f58fb3-9044-41f8-af71-b9b176646dc3@fake-email.com','$2b$10$BUptET1/7zNQLUK.v8W/3.vAbDeDn6yMyM4pxev3DO/NpGz7lE4eS'),(44,'d6f69eed-db8f-48a2-92b0-f874ba920b21@fake-email.com','$2b$10$Mj8yA2j5lS/Cja.l6w2qouQNE4cQ/AAiaSoUozvyN6/8tHzn0sma2'),(45,'3692dc1f-e926-4310-a862-82063eb6c3ee@fake-email.com','$2b$10$e5Nvw8imJucE8Lm890gIVOFUFQ/QuzvRL85T9wBafflBXR.BOB3pK'),(46,'fb241a52-edb1-4ead-a0a0-d8983f619989@fake-email.com','$2b$10$GBcZFoI81pj.N6Hf.igjVeflL1475t3U1bQwiT.AQaU5FQANv5IkW'),(47,'adef14b0-7d9b-418c-8672-9a9c2009f258@fake-email.com','$2b$10$QbZorR0cA05urk4rBzZopeBIj2IbHzn9NwPgwEfy8.d1VWb4M9Qu6'),(48,'67e7127f-5a0b-4659-8ab6-ff037568014b@fake-email.com','$2b$10$aSs2lOW3O50gMCF9a.2U8.otS5g/bMYpOGWdfm7F4xK0/Z37tGcMC'),(49,'f8d7eb2f-2d9d-4ac0-b13e-a64f4c4637a9@fake-email.com','$2b$10$0c/RlPyjIDMeARMor/AJXerm.EsS/qjuZ11uFc3aiHtLcK1C5Ab6S'),(50,'c44271ed-6254-487f-bf85-fa02d900003b@fake-email.com','$2b$10$h/2TDCnI3GrDPWpFar4WruHznbAFnESpfM8Iz.Y9zA7ZS8Qc0KKY6'),(51,'a0f354de-b6f9-45e7-928f-bec83838526b@fake-email.com','$2b$10$lkERCoIp/LvKSMmeths9veKMf0YJ60AlHTzhJI8cT3E8w5QoAU07e'),(52,'445b1236-1db7-4da5-b0fa-63f971d1dcd0@fake-email.com','$2b$10$SKUePKnGDB90QXcvlB2FvuCqdVZlFE3DOfVuKrsgOkxnqRd4is356'),(53,'6dabc101-6e85-43ed-b1b2-37723b5cb1e4@fake-email.com','$2b$10$f/PA8fykae.OfZVJFtRGhue1oCZmaFcF53ZxdS8hhTyQynOfnybty'),(54,'b7b92192-90c6-43db-8353-d3c6b528a4ec@fake-email.com','$2b$10$DOE312D2LLvdoEy.gXScGeKEkrIeD.Xd1Jjp3nWgSJEIMeT4DvykC'),(55,'eba73d72-3c62-4595-ba80-0303ef3aafbe@fake-email.com','$2b$10$iPgW7Cieqjiw5zBYz2ObrucKTOHwyqeIMcegXZ09hdatQ8P6YD7FO'),(56,'11b5137b-5df3-4f8a-a096-b67e261ed323@fake-email.com','$2b$10$Zdf3B6/w9hnSXTWYIEAHd.XlsMqGW2Co3ZjhQe07IotN7GoCZ3kQW'),(57,'083ea0e4-e434-4cb4-ad90-6320a9b41e77@fake-email.com','$2b$10$ahweTeEE6HA2GPawARC.x.7eK2XfmqANTUIRbPPND7utgX8662eNO'),(58,'0fa63d7c-9105-47f7-8320-d20030aeaf4c@fake-email.com','$2b$10$M5/1VfH2wBLvrZPtatCYOuGJlEWvJSVhlNcJcLXpEske1ywjd3klu'),(59,'e892367a-ab15-452e-b88d-fce00173fb8f@fake-email.com','$2b$10$XoBPMcI4cDRSZoMS00wgr.CEfmVPFH6UrvyOiRJJKZ3T.p9SyudyO'),(60,'9807184b-c3f1-4471-bf40-7de2cb6fb364@fake-email.com','$2b$10$.b16AOVrFcmotX6N4NIaPedemNR0QTNfyYt1Ym14jwlRVVK1lecoG'),(61,'09178e68-2691-4122-a41d-514cb82dcfbc@fake-email.com','$2b$10$Lj3Fw70ujm3OzDKYE3X1FO2wXzjF4L3CLSdGATv9RofuMScAIehmK'),(62,'1649022c-0f2c-4356-b9c6-cbc27a12305e@fake-email.com','$2b$10$5a5LVOwcO0v9pyX51RotE.sH/MkgwM0ZO7fAKCrUbFTIR7.nGEsOm'),(63,'0df30c88-a9fa-4842-ac49-188a67944de4@fake-email.com','$2b$10$6UwiVJrIoWfmU7YPXnbMyeGKRB.vY8FuVb8jRUTYjUe6AxRwReKSC'),(64,'15e19a7e-bdb8-4e78-9dbf-e068b1e1d066@fake-email.com','$2b$10$1tG2zuz/0/cisHKSnXH3J.LhR9gdX0Yds.2gSGubYFY8YB1MIJcTu'),(65,'8b40e3b4-5598-4603-ad50-3401e89b4c50@fake-email.com','$2b$10$OtsLbER8XqsT.xebIav.q.nEXoHxX1BNCg7Ip4aTCyt3L3RxbZ1Eq'),(66,'d134fc1f-0472-4e41-8c6b-411d7326c95b@fake-email.com','$2b$10$eAwhOixoBEgw9ISUOtKWY.X2XkCyApY9HIvHBCeZd8zcgqLzG6AjG'),(67,'6450acbc-9aa2-4d8d-a14e-7d320e43e411@fake-email.com','$2b$10$suq3lHxMVHl5llQPzObA/Oep37M1YCOS1wvm0srBWb.YOfO22SNOi'),(68,'429d4510-f58e-4548-9d34-78187226afaf@fake-email.com','$2b$10$.FhN.cKA.76dgK7/U/kYZ.LFjBUAA2Ooy2V8qKZMULPe3obOtWPhu'),(69,'b283da94-41ac-41b6-af7d-d796ae509c03@fake-email.com','$2b$10$qvLX6DX7CCTMOHpsO/OjlOaxXkBGYTnsKG8L8sw8wJqROVLm8AFzK'),(70,'f7ea71f9-da93-4f71-902a-f63fceecf189@fake-email.com','$2b$10$a8in.oUp.cA6kb9Btqhy1uuuaMAzkTPEzcdWgWdxK3PpDNgPpaIVa');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-04 20:48:34

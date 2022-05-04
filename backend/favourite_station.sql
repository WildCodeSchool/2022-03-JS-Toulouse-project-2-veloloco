-- mysql dump 10.13  distrib 8.0.28, for win64 (x86_64)
--
-- host: localhost    database: favourite_station
-- ------------------------------------------------------
-- server version	8.0.28-0ubuntu0.20.04.3

/*!40101 set @old_character_set_client=@@character_set_client */;
/*!40101 set @old_character_set_results=@@character_set_results */;
/*!40101 set @old_collation_connection=@@collation_connection */;
/*!50503 set names utf8 */;
/*!40103 set @old_time_zone=@@time_zone */;
/*!40103 set time_zone='+00:00' */;
/*!40014 set @old_unique_checks=@@unique_checks, unique_checks=0 */;
/*!40014 set @old_foreign_key_checks=@@foreign_key_checks, foreign_key_checks=0 */;
/*!40101 set @old_sql_mode=@@sql_mode, sql_mode='no_auto_value_on_zero' */;
/*!40111 set @old_sql_notes=@@sql_notes, sql_notes=0 */;

--
-- table structure for table `favourite_station`
--

drop table if exists `favourite_station`;
/*!40102 set @saved_cs_client     = @@character_set_client */;
/*!50503 set character_set_client = utf8mb4 */;
create table `favourite_station` (
  `id` int not null auto_increment,
  primary key (`id`)
) engine=innodb default charset=utf8mb4 collate=utf8mb4_0900_ai_ci;
/*!40101 set character_set_client = @saved_cs_client */;

--
-- dumping data for table `favourite_station`
--

lock tables `favourite_station` write;
/*!40000 alter table `favourite_station` disable keys */;
/*!40000 alter table `favourite_station` enable keys */;
unlock tables;
/*!40103 set time_zone=@old_time_zone */;

/*!40101 set sql_mode=@old_sql_mode */;
/*!40014 set foreign_key_checks=@old_foreign_key_checks */;
/*!40014 set unique_checks=@old_unique_checks */;
/*!40101 set character_set_client=@old_character_set_client */;
/*!40101 set character_set_results=@old_character_set_results */;
/*!40101 set collation_connection=@old_collation_connection */;
/*!40111 set sql_notes=@old_sql_notes */;

-- dump completed on 2022-04-27 10:16:48

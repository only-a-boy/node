/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : index

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2017-03-23 15:40:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car_info
-- ----------------------------
DROP TABLE IF EXISTS `car_info`;
CREATE TABLE `car_info` (
  `car_id` int(11) NOT NULL AUTO_INCREMENT,
  `vin` varchar(30) NOT NULL,
  `engine_no` varchar(30) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `car_card` varchar(20) DEFAULT NULL,
  `city_name` varchar(20) DEFAULT NULL,
  `model_year` varchar(4) DEFAULT NULL,
  `purchase_date` varchar(100) DEFAULT NULL,
  `car_type` varchar(20) DEFAULT NULL,
  `memo` varchar(1000) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `create_user_id` varchar(10) DEFAULT NULL,
  `create_time` bigint(20) unsigned DEFAULT '0',
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car_info
-- ----------------------------
INSERT INTO `car_info` VALUES ('1', '1', '1', '1', '11', '1', '1', '1', '', '', '', '', '', '', '0');
INSERT INTO `car_info` VALUES ('5', '999999999', '111', '秦', '红', '北京', '1', '北京', '11', '2017-02-28', 'ONE', '第一个测试小白鼠', 'FIVE', 'shi', '212121');
INSERT INTO `car_info` VALUES ('7', '2', '2', '2', '2', '2', '222', '2', '2', '2017-03-01', '2', '2', '2', '2', '2222');
INSERT INTO `car_info` VALUES ('9', '3', '33', '33', '3', '33', '333', '33', '33', '2017-03-03', '33', '333', '33', '33', '33333');
INSERT INTO `car_info` VALUES ('11', '4', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-02-28', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('13', '5', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('14', '6', '6666', 'DENZA', '66', '666', '666', 'TOKYO', '666', '2017-03-03', '666', '6666', 'FIVE', '666', '66666');
INSERT INTO `car_info` VALUES ('15', '7', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('16', '8', 'ssss', 'sss', '绿', 'sss', 'sss', 'sss', 's', '2017-03-03', 'sss', 'sss', 'ss', 'ss', '1212121');
INSERT INTO `car_info` VALUES ('17', '9', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('18', '10', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('19', '11', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('20', '12', 'aaa', '2', '1', '1', '1', '1', '1', '1111-11-10', '1', '1', '1', '1', '11');
INSERT INTO `car_info` VALUES ('21', '13', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('22', '14', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('23', '15', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('24', '16', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('25', '17', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('26', '18', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('111', '19', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('113', '20', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('114', '21', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-02', 'ONE', '999999999', 'FIVE', '19', '1467620674257');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('53', 'name1', 'name1');
INSERT INTO `users` VALUES ('54', 'name2', 'name2');
INSERT INTO `users` VALUES ('55', 'name3', 'name3');
INSERT INTO `users` VALUES ('57', 'shi', 'shi');
INSERT INTO `users` VALUES ('59', 'sgp', '111');
INSERT INTO `users` VALUES ('60', 'xxx', 'xxx');
INSERT INTO `users` VALUES ('125', '22', '111');
INSERT INTO `users` VALUES ('128', '111', '11');
INSERT INTO `users` VALUES ('130', '222', '22');
INSERT INTO `users` VALUES ('131', '333', '33');
INSERT INTO `users` VALUES ('132', 'ddd', 'dd');

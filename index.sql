/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : index

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2017-04-07 13:37:12
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
  `model_year` varchar(20) DEFAULT NULL,
  `purchase_date` varchar(100) DEFAULT NULL,
  `car_type` varchar(20) DEFAULT NULL,
  `memo` varchar(1000) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `create_user_id` varchar(10) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT '0',
  PRIMARY KEY (`car_id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car_info
-- ----------------------------
INSERT INTO `car_info` VALUES ('1', '1', '1', '1', '1', '1', '1', '1', '1', '1990-01-01', '1', '1', '1', '1', '1');
INSERT INTO `car_info` VALUES ('5', '999', '5', '秦', '红', '北京', '5', '北京', '5', '2017-02-28', '5', '第一个测试小白鼠', 'FIVE', 'shi', '5');
INSERT INTO `car_info` VALUES ('7', '2', '2', '宋', '绿', '上海', '222', '222', '222', '2017-03-01', '2', '我是第二个小白鼠', '222', '2', '222');
INSERT INTO `car_info` VALUES ('9', '3', '333', '333', '333', '333', '333', '333', '333', '2017-03-03', '333', '333', '333', '333', '333');
INSERT INTO `car_info` VALUES ('11', '4', '4', '4', '银', '4', '4', 'TOKYO', '4', '2017-02-28', 'ONE', '4', '4', '4', '4');
INSERT INTO `car_info` VALUES ('13', '5', '5', '5', '银', '5', '5', '5', '5', '2017-03-03', 'ONE', '5', 'FIVE', '5', '5');
INSERT INTO `car_info` VALUES ('14', '6', '1', 'DENZA', '1', '1', '1', 'TOKYO', '6', '2017-03-03', '666', '6666', 'FIVE', '666', '66666');
INSERT INTO `car_info` VALUES ('15', '7', '1', '1', '银', '7', '7', 'TOKYO', '7', '2017-03-03', 'ONE', '7', '7', '7', '7');
INSERT INTO `car_info` VALUES ('16', '8', '8', '8', '绿', '8', '8', '8', 's', '2017-03-03', '8', '8', '8', '8', '1212121');
INSERT INTO `car_info` VALUES ('17', '9', '9', '9', '银', '9', '9', '9', '9', '2017-03-03', 'ONE', '9', 'FIVE', '9', '9');
INSERT INTO `car_info` VALUES ('18', '10', '1010101001', '111', '银', '11', '1111', 'TOKYO', '11', '2017-03-03', 'ONE', '111', '11', '11', '1111');
INSERT INTO `car_info` VALUES ('19', '11', '1111111', 'DENZA', '银', '1111', '11111', 'TOKYO', '111', '1111-11-11', 'ONE', '111', 'FIVE', '19', '11111');
INSERT INTO `car_info` VALUES ('20', '12', 'aaa', '2', '1', '1', '1', '1', '1', '1111-11-10', '1', '1', '1', '1', '11');
INSERT INTO `car_info` VALUES ('21', '13', '13131313', '131313', '银', '13131', '13131313', '13131', '1313', '2017-03-03', '13131', '13131', 'FIVE', '13', '13131');
INSERT INTO `car_info` VALUES ('22', '14', '1414141', '1414141', '银', '1414141', '1414', 'TOKYO', '14', '2017-03-03', 'ONE', '14', 'FIVE', '14', '141');
INSERT INTO `car_info` VALUES ('23', '15', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('24', '16', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('25', '17', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('26', '18', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('111', '19', '999999999', 'DENZA', '银', 'TOKYO', '999999999', 'TOKYO', '999', '2017-03-03', 'ONE', '999999999', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('113', '20', '000', '000', '银', '000', '000', '000', '000', '2017-03-03', 'ONE', '000', 'FIVE', '00', '0');
INSERT INTO `car_info` VALUES ('114', '21', '222', 'DENZA', '银', 'TOKYO', '2', 'TOKYO', '2', '2017-03-02', 'ONE', '2', 'FIVE', '19', '1467620674257');
INSERT INTO `car_info` VALUES ('117', 'ddd', 'd', 'd', 'd', 'd', 'd', 'd', '', '', '', '', '', '', '');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('53', 'name1', 'name1');
INSERT INTO `users` VALUES ('54', 'name2', 'name2');
INSERT INTO `users` VALUES ('55', 'name3', 'name3');
INSERT INTO `users` VALUES ('57', 'shi', 'shi');
INSERT INTO `users` VALUES ('59', 'sgp', 'sgp');
INSERT INTO `users` VALUES ('60', 'xxx', 'xxx');
INSERT INTO `users` VALUES ('125', '22', '22');
INSERT INTO `users` VALUES ('128', '111', '1');
INSERT INTO `users` VALUES ('130', '222', '2');
INSERT INTO `users` VALUES ('131', '333', '3');
INSERT INTO `users` VALUES ('134', '1', '1');
INSERT INTO `users` VALUES ('135', '2', '2');
INSERT INTO `users` VALUES ('138', '是', '1');
INSERT INTO `users` VALUES ('139', 'aa', 'aa');
INSERT INTO `users` VALUES ('143', 'zz', 'zz');
INSERT INTO `users` VALUES ('144', 'fff', 'ff');
INSERT INTO `users` VALUES ('145', '4444444', '4444');
INSERT INTO `users` VALUES ('146', 'cc', 'cc');
INSERT INTO `users` VALUES ('147', '1111', 'ddd');
INSERT INTO `users` VALUES ('152', 'ccccc', 'cc');
INSERT INTO `users` VALUES ('154', 'bbb', 'bbb');

import { Sequelize } from 'sequelize';
import config from '../config/config';

/**
 * @description timezone - MySQL 내부의 default 시간 UTC를 한국 시간으로 바꿔주기 위해 9시간을 더해주었다
 */
const sequelzie = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
      host: config.development.host,
      dialect: "mysql",
      timezone: '+09:00'
  }
);

export default sequelzie;
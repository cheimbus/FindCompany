import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

interface UsersAttributes {
    id: number;
    name: string;
}

export class Users extends Model<UsersAttributes>{
  public readonly id! : number;
  public name! : string;
  public createdAt! : Date;
  public updatedAt! : Date;
  public static associations: {
  }
}

Users.init(
  {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete : "cascade"
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      }
  },
  {
      modelName: 'Users',
      tableName: 'users',
      sequelize,
      freezeTableName: true,
  }
);
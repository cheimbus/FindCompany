import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

interface CompanyAttributes {
    id: number;
    name: string;
}

export class Company extends Model<CompanyAttributes>{
  public readonly id! : number;
  public name! : string;
  public static associations: {
  }
}

Company.init(
  {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      }
  },
  {
      modelName: 'Company',
      tableName: 'company',
      sequelize,
      freezeTableName: true,
  }
);
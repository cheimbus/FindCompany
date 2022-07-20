import { Association, DataTypes, Model } from 'sequelize';
import { Users } from './user';
import sequelize from './index';

interface ApplicantAttributes {
    id: number;
    user_id: number;
    employer_id: number;
    is_apply: number;
    userIdApplicant?: any;
}

export class Applicant extends Model<ApplicantAttributes>{
  public readonly id! : number;
  public user_id! : number;
  public employer_id! : number;
  public is_apply! : number;
  public createdAt! : Date;
  public updatedAt! : Date;
  public static associations: {
    userIdApplicant: Association<Users, Applicant>
  }

}

Applicant.init(
  {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete : "cascade"
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      employer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_apply: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  },
  {
      modelName: 'Applicant',
      tableName: 'applicant',
      sequelize,
      freezeTableName: true,
      underscored: true,
  }
);

Users.hasMany(Applicant, {
    sourceKey: 'id',
    foreignKey: { name: "userId", allowNull: true },
    onDelete: "CASCADE",
    hooks: true
});
  
Applicant.belongsTo(Users, {
    foreignKey: { name: "userId", allowNull: true },
    onDelete: "CASCADE",

});
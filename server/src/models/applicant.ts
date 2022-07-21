import { Association, DataTypes, Model } from 'sequelize';
import { Users } from './user';
import { Posts } from './post';
import sequelize from './index';

interface ApplicantAttributes {
    id: number;
    user_id: number;
    post_id: number;
    employer_id: number;
    is_apply: number;
    userIdApplicant?: any;
    postIdApplicant?: any;
}

export class Applicant extends Model<ApplicantAttributes>{
  public readonly id! : number;
  public user_id! : number;
  public post_id! : number;
  public employer_id! : number;
  public is_apply! : number;
  public createdAt! : Date;
  public updatedAt! : Date;
  public static associations: {
    userIdApplicant: Association<Users, Applicant>
    postIdApplicant: Association<Posts, Applicant>
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
      post_id: {
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

Posts.hasMany(Applicant, {
  sourceKey: 'id',
  foreignKey: { name: "post_id", allowNull: true },
  onDelete: "CASCADE",
  hooks: true
});

Applicant.belongsTo(Posts, {
  foreignKey: { name: "post_id", allowNull: true },
  onDelete: "CASCADE",

});
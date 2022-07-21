import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

interface PostsAttributes {
    id: number;
    name: string;
    country: string;
    position: string;
    tech: string;
    message?: string;
    detail?: string | null;
}

/**
 * @description @detail - ?은 공고문에서 가져올 값들은 기본으로 detail을 제외시키고 가져오기 때문에
 * detail값을 없애고 보여줘야해서 와일드카드 ? 을 사용
 */
export class Posts extends Model<PostsAttributes>{
  public readonly id! : number;
  public name! : string;
  public country! : string;
  public position! : string;
  public tech! : string;
  public message! : string;
  public detail? : string;
  public createdAt! : Date;
  public updatedAt! : Date;
  public static associations: {
  }
}

Posts.init(
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
      },
      country: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tech: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      detail: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
  },
  {
      modelName: 'Posts',
      tableName: 'posts',
      sequelize,
      freezeTableName: true,
  }
);
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface JobAttributes {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
}

interface JobCreationAttributes extends Optional<JobAttributes, 'id'> {}

class Job extends Model<JobAttributes, JobCreationAttributes> implements JobAttributes {
  public id!: number;
  public title!: string;
  public company!: string;
  public location!: string;
  public salary!: number;
  public description!: string;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    salary: { type: DataTypes.FLOAT, allowNull: true },
    description: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    tableName: 'jobs',
    timestamps: true,
  }
);

export default Job;

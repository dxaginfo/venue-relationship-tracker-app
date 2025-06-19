import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

interface VenueAttributes {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  capacity: number;
  website: string;
  techSpecs: string;
  notes: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface VenueInput extends Optional<VenueAttributes, 'id'> {}
export interface VenueOutput extends Required<VenueAttributes> {}

class Venue extends Model<VenueAttributes, VenueInput> implements VenueAttributes {
  public id!: string;
  public name!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public country!: string;
  public zipCode!: string;
  public capacity!: number;
  public website!: string;
  public techSpecs!: string;
  public notes!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Venue.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    techSpecs: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Venue',
    tableName: 'venues',
  }
);

export default Venue;

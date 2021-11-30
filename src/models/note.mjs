import Moment from 'moment';

export default (sequelize, DataTypes) => sequelize.define('Note', {
  date: {
    type: DataTypes.DATE,
    get: () => Moment(this.getDataValue('date')).format('MMMM Do, YYYY'),
  },
  title: DataTypes.STRING,
  slug: DataTypes.STRING,
  description: DataTypes.STRING,
  content: DataTypes.STRING,
});

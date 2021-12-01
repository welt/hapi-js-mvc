import Moment from 'moment';

export default function Note(sequelize, Sequelize) {
  return sequelize.define('Note', {
    date: {
      type: Sequelize.DATEONLY,
      get: () => Moment(this.getDataValue('date')).format('MMMM Do, YYYY'),
    },
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    description: Sequelize.STRING,
    content: Sequelize.STRING,
  });
}

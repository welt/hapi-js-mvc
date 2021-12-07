import { Model } from 'objection';

export default class Note extends Model {
  static get tableName() {
    return 'Notes';
  }

  static get idColumn() {
    return 'id';
  }
}

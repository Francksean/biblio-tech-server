import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users_events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').notNullable()
      table.integer('event_id').notNullable()
      table.unique(['user_id', 'event_id'])      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
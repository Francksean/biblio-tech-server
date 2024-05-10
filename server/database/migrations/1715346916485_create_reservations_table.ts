import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reservations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').notNullable().references('users.id')
      table.integer('book_id').notNullable().references('books.id')
      table.date('begin_at').notNullable()
      table.date('end_at').notNullable()
      table.unique(['user_id', 'book_id'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
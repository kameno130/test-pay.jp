class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :customer_id, null: false, unique: true
      t.string :card_id, null: false, unique: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end

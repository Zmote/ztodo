class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.datetime :due_on
      t.float :duration

      t.timestamps
    end
  end
end

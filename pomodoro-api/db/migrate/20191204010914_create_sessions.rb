class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.datetime :date
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end

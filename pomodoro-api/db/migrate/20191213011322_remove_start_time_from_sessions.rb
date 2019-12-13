class RemoveStartTimeFromSessions < ActiveRecord::Migration[6.0]
  def change
    remove_column :sessions, :start_time
  end
end

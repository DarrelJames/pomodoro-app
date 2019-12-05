# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  s = Session.create(date: Faker::Date.between(from: 2.days.ago, to: Date.today), start_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now) , end_time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now))

  5.times do
    s.notes.create(content: Faker::Lorem.sentence(word_count: 10))
  end

end

puts "Created #{Session.count} sessions"
puts "Created #{Note.count} notes"
# create_table "notes", force: :cascade do |t|
#   t.string "content"
#   t.bigint "session_id", null: false
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["session_id"], name: "index_notes_on_session_id"
# end
#
# create_table "sessions", force: :cascade do |t|
#   t.datetime "date"
#   t.datetime "start_time"
#   t.datetime "end_time"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false

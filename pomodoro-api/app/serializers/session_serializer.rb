class SessionSerializer
  include FastJsonapi::ObjectSerializer

  attributes :start_time, :date, :end_time

  has_many :notes
end

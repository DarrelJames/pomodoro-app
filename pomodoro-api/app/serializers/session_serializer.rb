class SessionSerializer
  include FastJsonapi::ObjectSerializer

  attributes :date, :end_time

  has_many :notes
end

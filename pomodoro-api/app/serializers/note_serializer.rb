class NoteSerializer
  include FastJsonapi::ObjectSerializer

  attributes :content

  belongs_to :session
end

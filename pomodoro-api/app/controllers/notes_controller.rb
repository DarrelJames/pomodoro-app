class NotesController < ApplicationController
  def create
    binding.pry
    session = Session.find_by_id(params[:session_id])

    note = session.notes.build(note_params)

    if note.save
      render json: NoteSerializer.new(note)
    else
      render json: "Something went wrong"
    end
  end

  def note_params
    params.require(:note).permit(:content)
  end
end

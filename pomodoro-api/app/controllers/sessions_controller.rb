class SessionsController < ApplicationController

  def index
    sessions = Session.all
    render json: SessionSerializer.new(sessions)
  end

  def show
    session = Session.find_by_id(params[:id])
    options = {
      include: [:notes]
    }
    render json: SessionSerializer.new(session, options)
  end
end

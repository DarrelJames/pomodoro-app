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

  def create
    session = Session.new(session_params)

    if session.save
      options = {
        include: [:notes]
      }
      render json: SessionSerializer.new(session, options)
    else
      render json: "Something went wrong"
    end
  end

  def session_params
    params.require(:session).permit(:date, :end_time)
  end
end

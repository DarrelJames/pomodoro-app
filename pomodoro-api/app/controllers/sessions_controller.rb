class SessionsController < ApplicationController

  def index
    sessions = Session.all

    render json: sessions, include: [:notes]
  end

  def show
    session = Session.find_by_id(params[:id])

    render json: session, include: [:notes]
  end

  def create
    session = Session.new(session_params)

    if session.save

      render json: session, include: [:notes]
    else
      render json: "Something went wrong"
    end
  end

  def update
    session = Session.find_by_id(params[:id])
    if session.update(session_params)
      render json: session, include: [:notes]
    else
      render json: "Something went wrong"
    end
  end

  def session_params
    params.require(:session).permit(:date, :end_time)
  end
end

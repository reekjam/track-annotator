class Api::V1::TracksController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: { tracks: current_user.tracks, status: 200 }
  end

  def create
    track = current_user.tracks.new(track_params)
    if track.save
      render json: { track: track, message: "Track saved", status: 200 }
    else
      render json: { message: track.errors.to_a, status: 422 }
    end
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:artist, :name, :spotify_id, :spotify_uri)
  end
end

class Api::V1::TracksController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: { tracks: current_user.tracks }
  end

  def create
    track = current_user.tracks.create(
      artist: params[:track][:artist],
      name: params[:track][:name],
      spotify_uri: params[:track][:spotify_uri]
    )

    if track
      render json: { data: track }
    else
      render json: { error: track.errors }
    end
  end

  def destroy
  end
end

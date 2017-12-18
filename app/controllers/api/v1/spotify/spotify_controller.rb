class Api::V1::Spotify::SpotifyController < ApplicationController
  before_action :authenticate_user!

  def album_tracks
    response = SpotifyApiHelper.album_tracks(current_user, params[:album_id])
    render json: { data: response }
  end

  def artist_albums
    response = SpotifyApiHelper.artist_albums(current_user, params[:artist_id])
    render json: { data: response }
  end

  def search
    response = SpotifyApiHelper.search(current_user, params[:q], params[:type])
    render json: { data: response }
  end

  def track
    response = SpotifyApiHelper.track(current_user, params[:id])
    render json: { data: response }
  end
end

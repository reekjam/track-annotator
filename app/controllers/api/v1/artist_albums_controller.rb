class Api::V1::ArtistAlbumsController < ApplicationController
  def index
    response = SpotifyApiHelper.artist_albums(current_user, params[:artist_id])
    render json: { data: response }
  end
end

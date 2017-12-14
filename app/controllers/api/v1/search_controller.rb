class Api::V1::SearchController < ApplicationController
  def new
    user = User.find_by username: 'rick_rieta'
    response = SpotifyApiHelper.search(user, params[:q], params[:type])
    render json: { data: response }
  end
end

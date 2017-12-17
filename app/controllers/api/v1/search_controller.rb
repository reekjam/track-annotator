class Api::V1::SearchController < ApplicationController
  before_action :authenticate_user!

  def new
    response = SpotifyApiHelper.search(current_user, params[:q], params[:type])
    render json: { data: response }
  end
end

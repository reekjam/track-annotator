class Api::V1::LoginController < ApplicationController
  def create
    query_params = {
      client_id: ENV['REACT_APP_CLIENT_ID'],
      redirect_uri: ENV['REACT_APP_REDIRECT_URI'],
      response_type: 'code',
      scope: 'user-read-email user-top-read playlist-modify-public playlist-modify-private user-read-currently-playing user-read-recently-played user-read-playback-state'
    }
    url = 'https://accounts.spotify.com/authorize'

    redirect_to "#{url}?#{query_params.to_query}"
  end
end

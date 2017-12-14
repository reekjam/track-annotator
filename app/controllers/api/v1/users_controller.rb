class Api::V1::UsersController < ApplicationController
  require 'httparty'

  def create
    if params[:error]
      # TODO: handle error
      redirect_to "http://localhost:3001/login/error"
    else
      body = {
        :code => params[:code],
        :client_id => ENV['REACT_APP_CLIENT_ID'],
        :client_secret => ENV['REACT_APP_CLIENT_SECRET'],
        :grant_type => 'authorization_code',
        :redirect_uri => ENV['REACT_APP_REDIRECT_URI']
      }
      # Request access token from Spotify
      auth_response = HTTParty.post("https://accounts.spotify.com/api/token", :body => body)
      # Parse response for auth params
      auth_params = JSON.parse(auth_response.body)

      # Request user data
      headers = {
        "Authorization" => "Bearer #{auth_params['access_token']}"
      }
      user_response = HTTParty.get("https://api.spotify.com/v1/me", :headers => headers)
      user_params = JSON.parse(user_response.body)

      # Create or find user
      @user = User.find_or_create_by(
        username: user_params['id'],
        spotify_url: user_params['external_urls']['spotify'],
        href: user_params['href'],
        uri: user_params['uri']
      )

      # Update access and refresh tokens
      @user.update(access_token: auth_params['access_token'], refresh_token: auth_params['refresh_token'])

      redirect_to "http://localhost:3000/?username=#{@user.username}"
    end
  end
end

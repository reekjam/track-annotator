class Api::V1::UsersController < ApplicationController
  require 'httparty'

  def create
    if params[:error]
      # TODO: handle error
      redirect_to "http://localhost:3001/login/error"
    else
      auth_response = Authenticator.fetch_spotify_token(params[:code])
      user_info = Authenticator.fetch_spotify_user_info(auth_response['access_token'])

      # Create or find user
      @user = User.find_or_create_by(
        username: user_info['id'],
        spotify_url: user_info['external_urls']['spotify'],
        href: user_info['href'],
        uri: user_info['uri']
      )

      # Update access and refresh tokens
      @user.update(access_token: auth_response['access_token'], refresh_token: auth_response['refresh_token'])

      payload = {
        username: @user.username
      }

      jwt = UserToken.encode(payload)

      redirect_to "http://localhost:3000/?token=#{jwt}"
    end
  end
end

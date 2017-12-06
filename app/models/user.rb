class User < ApplicationRecord
  def access_token_expired?
    # Spotify token expires every hour (3600)
    (Time.now - self.updated_at) > 3300
  end

  def refresh_access_token
    if self.access_token_expired?
      body = {
        grant_type: 'refresh_token',
        refresh_token: self.refresh_token,
        client_id: ENV['REACT_APP_CLIENT_ID'],
        client_secret: ENV['REACT_APP_CLIENT_SECRET']
      }

      auth_response = HTTParty.post('https://api.spotify.com/api/token', body)
      auth_params = JSON.parse(auth_response.body)
      self.update(access_token: auth_params['access_token'])
    end
  end
end
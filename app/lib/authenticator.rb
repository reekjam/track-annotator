module Authenticator
  def self.fetch_spotify_token(code)
    body = {
      :code => code,
      :client_id => ENV['REACT_APP_CLIENT_ID'],
      :client_secret => ENV['REACT_APP_CLIENT_SECRET'],
      :grant_type => 'authorization_code',
      :redirect_uri => ENV['REACT_APP_REDIRECT_URI']
    }

    response = HTTParty.post("https://accounts.spotify.com/api/token", :body => body)
    JSON.parse(response.body)
  end

  def self.fetch_spotify_user_info(token)
    headers = {
      "Authorization" => "Bearer #{token}"
    }
    user_response = HTTParty.get("https://api.spotify.com/v1/me", :headers => headers)
    user_params = JSON.parse(user_response.body)
  end
end

class SpotifyApiHelper
  def self.album_tracks(user, album_id)
    user.refresh_access_token

    api_url = "https://api.spotify.com/v1/albums/#{album_id}"

    headers = {
      "Authorization" => "Bearer #{user.access_token}"
    }

    response = HTTParty.get(api_url, :headers => headers)
    JSON.parse(response.body)
  end

  def self.artist_albums(user, artist_id)
    user.refresh_access_token

    api_url = "https://api.spotify.com/v1/artists/#{artist_id}/albums"

    headers = {
      "Authorization" => "Bearer #{user.access_token}"
    }

    response = HTTParty.get(api_url, :headers => headers)
    JSON.parse(response.body)
  end

  def self.search(user, q, type)
    user.refresh_access_token

    api_url = "https://api.spotify.com/v1/search"

    headers = {
      "Authorization" => "Bearer #{user.access_token}"
    }

    query_params = {
      q: q,
      type: type
    }

    url = "#{api_url}?#{query_params.to_query}"

    response = HTTParty.get(url, :headers => headers)
    JSON.parse(response.body)
  end

  def self.track(user, track_id)
    user.refresh_access_token

    api_url = "https://api.spotify.com/v1/tracks/#{track_id}"

    headers = {
      "Authorization" => "Bearer #{user.access_token}"
    }

    response = HTTParty.get(api_url, :headers => headers)
    JSON.parse(response.body)
  end
end

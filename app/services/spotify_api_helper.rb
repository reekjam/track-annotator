class SpotifyApiHelper
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
    results = JSON.parse(response.body)
  end
end

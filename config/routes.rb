Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      namespace :spotify do
        get '/albums/:album_id/tracks', to: 'spotify#album_tracks'
        get '/artists/:artist_id/albums', to: 'spotify#artist_albums'
        get '/search', to: 'spotify#search'
        get '/tracks/:id', to: 'spotify#track'
      end
      get '/login', to: 'login#create'
      get '/users', to: 'users#create'

      resources :tracks, only: [:index, :create, :destroy]
    end
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/artist_albums', to: 'artist_albums#index'
      get '/login', to: 'login#create'
      get '/search', to: 'search#new'
      get '/users', to: 'users#create'
    end
  end
end

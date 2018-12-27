Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:show] do
        resources :microposts, only: [:index], controller: 'users/microposts'
        resources :timelines, only: [:index], controller: 'users/timelines'
        get 'liking', controller: 'users/like'
        get 'following', controller: 'users/follow'
        get 'followers', controller: 'users/follow'
      end
      resources :microposts, only: [:create, :show] do
        get 'likes', controller: 'microposts/like'
      end
      resource :like, only: [:create, :destroy], controller: 'like'
      resource :follow, only: [:create, :destroy], controller: 'follow'
      namespace :auth do
        post 'register'
        post 'token'
        get 'user', action: 'show'
        patch 'user', action: 'update'
        put 'user', action: 'update'
      end
    end
  end
  match '*path', to: 'home#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :users, only: [:show] do
    resources :microposts, only: [:index], controller: 'users/microposts'
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
    get 'user'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

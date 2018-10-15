Rails.application.routes.draw do
  resources :users, only: [:show] do
    resources :microposts, only: [:index], controller: 'users/microposts'
    resource :follow, only: [:create, :destroy], controller: 'users/follow'
    get 'following', controller: 'users/follow'
    get 'followers', controller: 'users/follow'
  end
  resources :microposts, only: [:create, :show] do
    resource :like, only: [:create, :destroy], controller: 'microposts/like'
    get 'likes', controller: 'microposts/like'
  end
  namespace :auth do
    post 'register'
    post 'token'
    get 'user'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

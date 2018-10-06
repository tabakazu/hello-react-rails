Rails.application.routes.draw do
  resources :users, only: [:show] do
    resources :microposts, only: [:index]
  end
  namespace :auth do
    post 'register'
    post 'token'
    get 'user'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

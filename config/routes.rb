Rails.application.routes.draw do
  resources :users, only: [:create, :show] do
    collection do
      get 'myself'
      post 'token'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
